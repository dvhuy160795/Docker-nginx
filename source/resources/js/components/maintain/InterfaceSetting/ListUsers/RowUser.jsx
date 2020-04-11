import React, { Component } from 'react';

export default class RowUser extends Component {
    render() {
        return (
            <tr key={this.props.inforUser.user_id}>
                <td key={this.props.inforUser.user_id + "code"}>{this.props.inforUser.user_code}</td>
                <td key={this.props.inforUser.user_id + "name"}>{this.props.inforUser.user_name}</td>
                <td key={this.props.inforUser.user_id + "phone"}>{this.props.inforUser.user_phone}</td>
                <td key={this.props.inforUser.user_id + "address"}>{this.props.inforUser.user_address}</td>
                <td>
                <div className="container">
                    <button type="button" className="btn btn-info">Edit</button>  
                    <button type="button" className="btn btn-secondary">Delete</button>
                </div>
                </td>
            </tr>
        );
    }
}

