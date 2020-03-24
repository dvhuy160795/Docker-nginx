import React, { Component } from 'react';
import {TextBox} from './Input/index';
export default class Input extends Component {
    constructor(props) {
        super(props);
    }

    buildAttrElement(attr) {
        const strAttr = "";
        console.log(attr);
        return strAttr;
    }

    checkElement() {
        var element = "";
        const attr = this.buildAttrElement(this.props.attr);
        switch (this.props.type) {
            case "text-box":
                element = <TextBox attr={this.props.attr}/>;
                break;
            default:
                break;
        }
        return element;
    }

    render() {
        return (
            <div>
                {this.checkElement()}
            </div>
        );
    }
}

