import React, { Component } from "react";
import { AiOutlineUser } from "react-icons/ai";
import "./Header.css";
import svg from "./SB_RGB.svg";

export class Header extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: ""
    //     };
    // }

    // componentDidMount() {
    //     if(this.state.name === ""){
    //         let fullName = prompt("Geben Sie Ihre name ein: ");
    //         this.setState({name: fullName});
    //     }
    // }

    render() {

        if(this.props.firmenname && this.props.gewerk) {
            return this.renderWithCompanyData();
        }

        return (
            <div className="container">
                <div className="wrapper-container">
                    <div className="wrapper">
                        <div className="left">
                            <div className="title">
                                <h3>FFM-Mangelerfassung</h3>
                            </div>
                            <div >
                                <h4>{<AiOutlineUser />} </h4>
                                {/* {this.state.name} */}
                            </div>
                        </div>
                        <div className="right">
                            <img src={svg} alt="dsada" height={110} width={200} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    renderWithCompanyData = () => {
        return (
            <div className="container">
                <div className="wrapper-container">
                    <div className="wrapper">
                        <div className="left">
                            <div className="title">
                                <h3>FFM-Mangelerfassung</h3>
                            </div>
                            <div className="name">
                                <h4>{<AiOutlineUser />} </h4>
                                {/* {this.state.name} */}
                            </div>
                        </div>
                        <div className="firma-daten">
                            <div className="firmen-name">
                                <label>firmenname</label>
                                <h4>{this.props.firmenname}</h4>
                            </div>
                            <div className="firmen-gewerk">
                                <label>Gewerk</label>
                                <h4>{this.props.gewerk}</h4>
                            </div>
                        </div>
                        <div className="right">
                            <img src={svg} alt="dsada" height={110} width={200} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}