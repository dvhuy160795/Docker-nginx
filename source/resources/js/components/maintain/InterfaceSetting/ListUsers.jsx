import React, { Component } from 'react';
import RowUser from './ListUsers/RowUser';
import Pagination from "react-js-pagination";

import '../../../../scss/maintain/ListUsers.scss';

export default class ListUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activePage: 15
        };
    }

    handlePageChange(pageNumber) {
        console.log(`active page is ${pageNumber}`);
        this.setState({activePage: pageNumber});
    }

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
                <div>
                    <Pagination
                        activePage={this.state.activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={450}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

