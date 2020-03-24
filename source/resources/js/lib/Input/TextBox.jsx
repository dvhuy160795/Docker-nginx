import React, { Component } from 'react';
import Base from './Base';

export default class TextBox extends Base {
    render() {
        return (
            <div>
            	<label>{this.props.label}:<input type="text" value={this.props.value} onChange={this.handleChange} /></label>
            </div>
        );
    }
}

