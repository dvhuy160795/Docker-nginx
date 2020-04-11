import React from 'react';
import Grid from '@material-ui/core/Grid';

import FormUser from './FormUser';
import ListUsers from './ListUsers';
import axios from "axios";
import ReactDOM from "react-dom";
import Error from '../../../lib/Error';
import Async from 'react-async';

class ManageUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listUsers: null,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getInstance(){
        return Object. assign({}, this);
    }

    async getListManageUsers(){
        return await axios.get(root_url + '/maintain/getManageUsers')
            .then(response => {
                this.setState({listUsers: response.data});
                return response.data;
            })
            .catch(errors => {
                const messagesError = Object.assign({}, errors).response.data;
                ReactDOM.render(<Error errors={messagesError}/>, document.querySelector('#error'));
            });
    }

    handleSubmit(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        axios.post(root_url + '/maintain/postManageUsers', data)
            .then((response) => {
                this.handleSubmitCallback();
            })
            .catch(errors => {
                // console.log(errors);
                const messagesError = Object.assign({}, errors).response.data;
                ReactDOM.render(<Error errors={messagesError}/>, document.querySelector('#error'));
            });
    }

    handleSubmitCallback() {
        this.getListManageUsers();
    }

    componentDidMount() {
        this.getListManageUsers();
    }

    // componentWillUnmount() {
    //
    // }

    render() {
        this.getListManageUsers();
        return (
            <div>
            <Async promiseFn={this.getListManageUsers()}>
                {({ data, err, isLoading }) => {
                    console.log(data);
                  if (isLoading) return "Loading..."
                  if (err) return `Something went wrong: ${err.message}`

                  if (data)
                    return (
                      <div>
                        <div>
                          <h2>React Async - Random Users</h2>
                        </div>
                        {data.map(user=> (
                          <div key={user.username} className="row">
                            <div className="col-md-12">
                              <p>{user.name}</p>
                              <p>{user.email}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    )
                }}
            </Async>
                <ListUsers listUsers={this.state.listUsers}/>
                    {/*<div style={{width: "100%"}}>*/}
                    {/*    <form id="form-user" onSubmit={this.handleSubmit}>*/}
                    {/*        <FormUser/>*/}
                    {/*    </form>*/}
                    {/*    <div id={"error"}></div>*/}
                    {/*</div>*/}
            </div>
        );
    }
}

export default ManageUsers;
