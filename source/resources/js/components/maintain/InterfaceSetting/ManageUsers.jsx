import React from 'react';
import Grid from '@material-ui/core/Grid';

import FormUser from './FormUser';
import ListUsers from './ListUsers';
import axios from "axios";
import ReactDOM from "react-dom";
import Error from '../../../lib/Error';

class ManageUsers extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listUsers: [],
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    getInstance(){
        return Object. assign({}, this);
    }

    async getListManageUsers(){
        return await axios.get('http://localhost:8000/maintain/getManageUsers')
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
        axios.post('http://localhost:8000/maintain/postManageUsers', data)
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
        return (
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Grid container id={"huydv111"} justify="center" spacing={2}>
                            <ListUsers listUsers={this.state.listUsers}/>
                        </Grid>
                    </Grid>
                            <div style={{width: "100%"}}>
                                <form id="form-user" onSubmit={this.handleSubmit}>
                                    <FormUser/>
                                </form>
                                <div id={"error"}></div>
                            </div>

                </Grid>
            </div>
        );
    }
}

export default ManageUsers;
