import React, { Component } from 'react';
import ReactDOM from "react-dom";

import axios from 'axios';
import '../../../../css/maintain/FormUser.css';
import Error from '../../../lib/Error';

export default class FormPost extends Component {
	constructor() {
	    super();
	    this.handleSubmit = this.handleSubmit.bind(this);
  	}

  	handleSubmit(event) {
	    event.preventDefault();
	    const data = new FormData(event.target);
        axios.post('http://localhost:8888/maintain/postManageUsers', data)
            .then(response => {
                this.submitCallback(response);
            })
            .catch(errors => {
                const messagesError = Object.assign({}, errors).response.data;
                ReactDOM.render(<Error errors={messagesError}/>, document.querySelector('#error'));
            })
  	}

  	submitCallback(response) {
        console.log(response);
    }

    render() {
        return (
            <form id="form-user" onSubmit={this.handleSubmit}>
                <input id="user_group_id" name="user_group_id" type="hidden" value="11" />
                <input id="user_other_info" name="user_other_info" type="hidden" value="11" />
                <table>
				  	<tbody>
                        <tr>
                            <th><label htmlFor="usercode">User Code</label></th>
                            <td><input id="usercode" name="user_code" type="text" /></td>
                        </tr>
                        <tr>
                            <th><label htmlFor="username">User Name</label></th>
                            <td><input id="username" name="user_name" type="text" /></td>
                        </tr>
	                	<tr>
	                		<th><label htmlFor="userpass">User Pass</label></th>
	                		<td><input id="userpass" name="user_password" type="text" /></td>
	                	</tr>
	                	<tr>
	                		<th><label htmlFor="mail">Email</label></th>
	                		<td><input id="mail" name="user_mail" type="text" /></td>
	                	</tr>
	                	<tr>
	                		<th><label htmlFor="phone">Phone</label></th>
	                		<td><input id="phone" name="user_phone" type="text" /></td>
	                	</tr>
	                	<tr>
	                		<th><label htmlFor="address">Address</label></th>
	                		<td><input id="address" name="user_address" type="text" /></td>
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

