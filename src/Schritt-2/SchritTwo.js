import { Component } from "react";
import { Header } from "../Header/Header";
import { readString } from "react-papaparse";
import data from "./test_data.csv";
import "./SchritTwo.css"
import { Route } from "react-router"
export class SchritTwo extends Component {

    
    state = {
        input: "",
        fData: [{
            fname: "123 Testfirma GmbH",
           
        },
        
        {
            fname: "Siemens AG",
           
        },
        {
            fname: "Technisches Zeichenbüro Schmidtchen GmbH",
           
        },
        {
            fname: "Tief- und Rohrleitungsbau Kühnapfel & Habicht GmbH",
            
        }
        ],
        data: [{
            fname: "123 Testfirma GmbH",
           
        },
        {
            fname: "Siemens AG"
        },
        {
            fname: "Technisches Zeichenbüro Schmidtchen GmbH"
        },
        {
            fname: "Tief- und Rohrleitungsbau Kühnapfel & Habicht GmbH"
        }
        ]
    };


    handleChange = event => {
        this.setState({
            input: event.target.value
        }, this.filterHandler);
    };

    highlighter = (obj, lowercasedInput) => {
        let rawObj = obj.replace(`<span class='highlight'>`, '').replace(`</span>`, '');

        if (rawObj.indexOf(lowercasedInput) != -1) {
            const startIndex = rawObj.indexOf(lowercasedInput);
            const endIndex = startIndex - 1 + lowercasedInput.length;

            if (startIndex != 0) {
                return rawObj.slice(0, startIndex) + `<span class='highlight'>${lowercasedInput}</span>` + rawObj.slice(endIndex + 1, rawObj.length);
            } else {
                return rawObj.slice(0, startIndex) + `<span class='highlight'>${lowercasedInput}</span>` + rawObj.slice(endIndex + 1, rawObj.length);
            }
        } else {
            return rawObj
        }
    }


    filterHandler = () => {
        const {
            input,
            data
        } = this.state;
        const lowercasedInput = input.toLowerCase();

        const filteredData = data.filter(item => {
            return Object.keys(item).some(key => {
                const regex = new RegExp(`^${lowercasedInput.trim()}`, 'i');
                return regex.test(item[key].toLowerCase());
            }
            );
        });

        let highlightFD = [];
        filteredData.map((values, index) => {
            highlightFD.push({
                ...values
            });
        })


        if (lowercasedInput.trim().length > 0) {
            highlightFD.map((val, index) => {
                for (let key in val) {
                    highlightFD[index][key] = this.highlighter(val[key].toLowerCase(), lowercasedInput);
                }
            });
        }

        this.setState({
            fData: highlightFD
        });

    }
    



    render() {
        const { input, fData } = this.state;
        return (
            <div className="container">
                <Header />
                <div className="firma-wrapper-wrapper">
                    <div className="firma-wrapper">
                        <div className="firma-title">
                            <h4>Firmenauswahl</h4>
                        </div>
                        <div className="firma-choice-wrapper">
                            <div className="firma-choice-label">
                                <h5>Hier bitte nach der Name der firma suchen:</h5>
                            </div>
                            <div className="search-bar">
                                <div className="search">
                                    <input value={input} onChange={this.handleChange} />
                                    {
                                        fData.map(item => (<div key={item.email} className="results" >
                                            <div dangerouslySetInnerHTML={{ __html: item.fname }} />&nbsp;|&nbsp;
                                         
                                        </div >
                                        ))
                                    }
                                    <button name="searchButton" onClick={this.#submitButtonEvent}>Suchen</button>
                                </div>
                                <div className="search-result">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    #submitButtonEvent = async () => {

        const options = {
            delimiter: ",",  // auto-detect
            newline: "",  // auto-detect
            quoteChar: '"',
            escapeChar: '"',
            header: false,
            transformHeader: undefined,
            dynamicTyping: false,
            preview: 0,
            encoding: "",
            worker: false,
            comments: false,
            step: undefined,
            complete: undefined,
            error: undefined,
            download: false,
            downloadRequestHeaders: undefined,
            skipEmptyLines: false,
            chunk: undefined,
            fastMode: undefined,
            beforeFirstChunk: undefined,
            withCredentials: undefined,
            transform: undefined,
        };
        let result = readString(data, options);

        let a = await fetch('./test_data.csv');
        let reader = await a.body.getReader();
        console.log(reader);
        let decoder = new TextDecoder('utf-8');
        let res = await reader.read();
        console.log(res);
        // console.log(decoder.decode(res.value));
        /*
                return fetch('./test_data.csv').then(function (response) {
                    let reader = response.body.getReader();
                    let decoder = new TextDecoder('utf-8');
        
                    return reader.read().then(function (result) {
                        return decoder.decode(result.value);
                    });
                });
                */
    }
}