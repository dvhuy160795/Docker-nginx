import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FormPost from './Main/FormPost.js';
import '../.././css/Main.css';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

export default class Main extends Component {
    render() {
        return (
                <Grid>
                    <Grid xs="6">
                        <FormPost/>
                    </Grid>
                    <Grid xs="6">
                        list
                    </Grid>
                </Grid>
        );
    }
}
if (document.getElementById('body-main')) {
    ReactDOM.render(<Main />, document.getElementById('body-main'));
}