import React, { Component } from "react";
// import { Link } from "react-router";
import {Link} from "react-router-dom"
import { Header } from "../Header/Header";
import { SubmitButton } from "../SubmitButton/SubmitButton";
import "./Schritt-1.css"

export class SchrittOne extends Component {

    constructor(props){
        super(props)
        this.state={
            selectedValue:""
        }
    }

    render() {
        return (
            <div className="container">
                <div className="wrapper">
                    <div className="bodyWrapper">
                        <Header />
                        <div className="choice-wrapper">
                            <div className="choice">
                                <div className="title">
                                    <h4>Mangeltypauswahl</h4>
                                </div>
                                <div className="choices">
                                    <div className="label">
                                        <h5>Bitte Mangeltyp auswählen:</h5>
                                    </div>
                                    <div className="radio-buttons">
                                        <input type="radio" id="magel" name="mangelTyp" value="mangel" onClick={()=>{  
                                            this.setState({selectedValue:"shritt1"})}} />   
                                        <label className="radio-button-label" htmlFor="mangel">Mangel</label>
                                        <br />
                                        <br />
                                        <input type="radio" id="glm" name="mangelTyp" value="glm"  onClick={()=>{this.setState({selectedValue:"shritt2"})}} />
                                        <label className="radio-button-label" htmlFor="glm">Gewährleistungsmangel</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {this.state.selectedValue =="shritt1"&& <Link to="/test1"> Weiter </Link>}
                        {this.state.selectedValue =="shritt2"&& <Link to="/test2"> Weiter </Link>}
                        
                        {/* <SubmitButton submitButtonEvent={this.#nextButtonAction} text="Weiter" /> */}
                    </div>
                </div>
            </div>
        );
    }

    #nextButtonAction = () => {
        console.log('value');
    }
}








