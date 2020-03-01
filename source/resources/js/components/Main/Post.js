import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Post extends Component {
    render() {
        return (
            <li>{this.props.post_title}</li>
        );
    }
}