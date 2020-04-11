import React from 'react';
import ReactDOM from 'react-dom';
import { makeStyles } from '@material-ui/core/styles';
import Navbar from './Navbar';
import '../../../css/maintain.css';
import Grid from '@material-ui/core/Grid';
import ManageUsers from './InterfaceSetting/ManageUsers';

export default function Layout() {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Navbar/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" id={"button"}>
                    <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-secondary">Left</button>
                        <button type="button" className="btn btn-secondary">Middle</button>
                        <button type="button" className="btn btn-secondary">Right</button>
                    </div>
                    </div>  
                </div>
                <div className="row">
                    <div className="col-md-12" id={"huydv"} style={{height: '87vh'}}>
                        <ManageUsers/>
                    </div>  
                </div>
            </div>
        </div>
        
    );
}



ReactDOM.render(<Layout />, document.querySelector('#body-main'));
