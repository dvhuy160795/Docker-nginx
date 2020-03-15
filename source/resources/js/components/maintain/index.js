import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './navbar';
import maintaincss from '../../../css/maintain.css';

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

export default function Layout() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = event => {
        setSpacing(Number(event.target.value));
    };

    return (
        <div className={classes.root}>
            <div id="formAddUser" className={maintaincss.width13}>

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


ReactDOM.render(<Layout />, document.querySelector('#body-main'));
