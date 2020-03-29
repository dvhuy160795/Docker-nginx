import React, { Component } from 'react';

import '../../../../css/maintain/FormUser.css';

export default class FormUser extends Component {
    getConFigField() {
        return [
            {
                "name" : "user_code",
                "type" : "text",
                "label" : "User Code",
                "id" : "user_code"
            },
            {
                "name" : "user_name",
                "type" : "text",
                "label" : "User ",
                "id" : "user_name"
            },
            {
                "name" : "user_password",
                "type" : "text",
                "label" : "User Pass",
                "id" : "user_password"
            },
            {
                "name" : "user_mail",
                "type" : "text",
                "label" : "User Mail",
                "id" : "user_mail"
            },
            {
                "name" : "user_phone",
                "type" : "text",
                "label" : "User Phone",
                "id" : "user_phone"
            },
            {
                "name" : "user_address",
                "type" : "text",
                "label" : "User Address",
                "id" : "user_address"
            }
        ];
    }

    render() {
        return (
            <div>
                <input id="user_group_id" name="user_group_id" type="hidden" value="11" />
                <input id="user_other_info" name="user_other_info" type="hidden" value="11" />
                <table>
                    <tbody>
                    {
                        this.getConFigField().map(
                            (field, index) => {
                            return (
                                <tr key={index}>
                                    <th><label htmlFor={field.name}>{field.label}</label></th>
                                    <td><input id={field.name} name={field.name} type={field.type} /></td>
                                </tr>
                            )
                            }
                        )
                    }
                    <tr>
                        <td colSpan="2">
                            <input type="submit" value="Save" />
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

