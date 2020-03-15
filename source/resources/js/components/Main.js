import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ReactDOM from 'react-dom';
import FormPost from './Main/FormPost.js';
import '../.././css/Main.css';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

export default function Main() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div id="formAddUser">
                <FormPost/>
            </div>
            <div id="listUsers">
                <table id="tblListUsers">
                    <thead>
                    <tr>
                        <th>User Name</th>
                        <th>User Age</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>huydv</td>
                        <td>25</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}



ReactDOM.render(<Main />, document.querySelector('#body-main'));
