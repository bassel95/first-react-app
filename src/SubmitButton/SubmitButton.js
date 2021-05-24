import React, { Component } from "react";
import "./SubmitButton.css";

export class SubmitButton extends Component {
    
    render() {
        return (
            <div className="container">
                <div className="submit-button-wrapper">
                    <button onClick={this.props.submitButtonEvent} name="submit">{this.props.text}</button>
                </div>
            </div>
        );
    }
}