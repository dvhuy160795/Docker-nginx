import React, { Component } from 'react';
import RowUser from './ListUsers/RowUser';
import Pagination from "react-js-pagination";

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
                <table className="table table-striped table-inverse table-hover">
                    <thead>
                        <tr>
                            <th>user_code</th>
                            <th>user_name</th>
                            <th>user_phone</th>
                            <th>user_address</th>
                            <th></th>
                        </tr>
                    </thead>
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
                        totalItemsCount={this.props.listUsers.length}
                        pageRangeDisplayed={5}
                        onChange={this.handlePageChange.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

