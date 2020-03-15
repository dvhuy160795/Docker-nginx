import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './navbar';
import '../../../css/maintain.css';
import Grid from '@material-ui/core/Grid';
import MenuLeft from "./menu";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        height: 140,
        width: 100,
    },
    control: {
        padding: theme.spacing(2),
    },
}));

export default function Layout() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = event => {
        setSpacing(Number(event.target.value));
    };

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={2}>
                <Grid container justify="center" spacing={spacing}>
                    <MenuLeft/>
                </Grid>
            </Grid>
            <Grid item xs={10}>
                <Grid container id={"huydv"} justify="center" spacing={spacing}>

                </Grid>
            </Grid>
            <Grid item xs={12} style={{position:"fixed",bottom:"2px" }} className="width100p">
                <Grid container justify="center" spacing={spacing}>
                    <Navbar/>
                </Grid>
            </Grid>

        </Grid>
    );
}



ReactDOM.render(<Layout />, document.querySelector('#body-main'));