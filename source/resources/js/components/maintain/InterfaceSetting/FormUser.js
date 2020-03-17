import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import '../../../../css/maintain/FormUser.css';

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
            <form id="form-user" onSubmit={this.handleSubmit}>
                <table>
				  	<tbody>
				  		<tr>
	                		<th><label htmlFor="username">User Name</label></th>
	                		<td><input id="username" name="username" type="text" /></td>
	                	</tr>
	                	<tr>
	                		<th><label htmlFor="usercode">User Code</label></th>
	                		<td><input id="usercode" name="username" type="text" /></td>
	                	</tr>
	                	<tr>
	                		<th><label htmlFor="usercode">User Pass</label></th>
	                		<td><input id="userpass" name="username" type="text" /></td>
	                	</tr>
	                	<tr>
	                		<th><label htmlFor="email">Email</label></th>
	                		<td><input id="email" name="email" type="email" /></td>
	                	</tr>
	                	<tr>
	                		<th><label htmlFor="email">Phone</label></th>
	                		<td><input id="phone" name="email" type="email" /></td>
	                	</tr>
	                	<tr>
	                		<th><label htmlFor="email">Address</label></th>
	                		<td><input id="address" name="email" type="email" /></td>
	                	</tr>
	                	<tr>
	                		<th><label htmlFor="birthdate">Birth Date</label></th>
	                		<td><input id="birthdate" name="birthdate" type="text" /></td>
	                	</tr>
	                	<tr>
	                		<td colSpan="2">
	                			<input type="submit" value="Save" />
	                		</td>
	                	</tr>
				  	</tbody>
                </table>	        
	      	</form>
        );
    }
}

