import React, { Component } from 'react';
import ReactDOM from "react-dom";

import axios from 'axios';

export default class FormPost extends Component {
	constructor() {
	    super();
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleSubmit(event) {
	    event.preventDefault();
	    const data = new FormData(event.target);
        axios.get('http://localhost:8888/maintain/getManageUsers', data)
            .then(response => {
                this.callback(response);
            })
            .catch(errors => {
                const messagesError = Object.assign({}, errors).response.data;
                ReactDOM.render(<Error errors={messagesError}/>, document.querySelector('#error'));
            })
  	}

    callback(response) {
        console.log(response);
    }

    render() {
        return (
            <div>aaaaa</div>
        );
    }
}

