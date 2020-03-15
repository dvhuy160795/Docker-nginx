import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
export default class FormPost extends Component {
	constructor() {
	    super();
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleSubmit(event) {
	    event.preventDefault();
	    const data = new FormData(event.target);

	    fetch('http://localhost:8888/post/addPost', {
	      method: 'POST',
	      body: data,
	    });
  	}
    render() {
        return (
            <form id="posts-form" onSubmit={this.handleSubmit}>
                <table></table>
                <label htmlFor="username">Enter your email</label>
                <input id="username" name="username" type="text" />
		        <label htmlFor="email">Enter your email</label>
		        <input id="email" name="email" type="email" />
		        <label htmlFor="birthdate">Enter your birth date</label>
		        <input id="birthdate" name="birthdate" type="text" />

		        <button>Send data!</button>
	      	</form>
        );
    }
}

