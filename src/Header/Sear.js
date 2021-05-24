import React from 'react';

state = {
    input: "",
    fData: [{
        fname: "Jayne",
        lname: "Washington",
        email: "jaynewashington@exposa.com",
        gender: "female"
    },
    {
        fname: "Peterson",
        lname: "Dalton",
        email: "petersondalton@exposa.com",
        gender: "male"
    },
    {
        fname: "Velazquez",
        lname: "Calderon",
        email: "velazquezcalderon@exposa.com",
        gender: "male"
    },
    {
        fname: "Norman",
        lname: "Reed",
        email: "normanreed@exposa.com",
        gender: "male"
    }
    ],
    data: [{
        fname: "Jayne",
        lname: "Washington",
        email: "jaynewashington@exposa.com",
        gender: "female"
    },
    {
        fname: "Peterson",
        lname: "Dalton",
        email: "petersondalton@exposa.com",
        gender: "male"
    },
    {
        fname: "Velazquez",
        lname: "Calderon",
        email: "velazquezcalderon@exposa.com",
        gender: "male"
    },
    {
        fname: "Norman",
        lname: "Reed",
        email: "normanreed@exposa.com",
        gender: "male"
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
    const {input,fData} = this.state;



    return (<div>
        <input value={input} onChange={this.handleChange}
        /> {
            fData.map(item => (<div key={item.email} className="results" >
                <div dangerouslySetInnerHTML={{ __html: item.fname }} />&nbsp;|&nbsp;
                <div dangerouslySetInnerHTML={{ __html: item.lname }} />&nbsp;|&nbsp;
                <div dangerouslySetInnerHTML={{ __html: item.gender }} />&nbsp;|&nbsp;
                <div dangerouslySetInnerHTML={{ __html: item.email }} />
            </div >
            ))
        } </div>
    );
}