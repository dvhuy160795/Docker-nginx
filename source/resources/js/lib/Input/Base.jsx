import React, { Component } from 'react';

export default class Base extends Component {
    constructor(props) {
        super(props);
    }

    handleChange() {
        return this.props.onChange;
    }

    handleClick() {
        return this.props.onClick;
    }

    render() {
        return (
            <div>
                something
            </div>
        );
    }
}

