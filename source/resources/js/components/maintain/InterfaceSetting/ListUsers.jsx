import React, { Component } from 'react';
import RowUser from './ListUsers/RowUser';

import '../../../../css/maintain/ListUsers.css';

export default class ListUsers extends Component {
    render() {
        return (
            <div style={{width:"100%", padding:"5px",}}>
                <div className="header">
                    Danh list users
                </div>
                <table id={"list-users"}>
                    <tbody>
                        {this.props.listUsers.map((user, i) => {
                            return (<RowUser key={i} inforUser={user}/>)
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

