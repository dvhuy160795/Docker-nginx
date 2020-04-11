import React from 'react';
import ReactDOM from 'react-dom';
import Oclock from './Oclock';
import ManageUsers from './InterfaceSetting/ManageUsers';

export default function Navbar() {
    const configFunction = (name) => {
        switch (name) {
            case "Users":
            ReactDOM.render(<ManageUsers/>, document.querySelector('#huydv'));
            break;
            default:
            ReactDOM.render("Opp!", document.querySelector('#huydv'));
            break;
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <a className="navbar-brand" href="#">Hidden brand</a>
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    {['Users', 'Group Users', 'Permissions'].map((text, index) => (
                        <li className="nav-item active" key={index + "li"} >
                            <a className="nav-link" key={index} href="#" onClick={configFunction.bind(this,text)}>{text}</a>
                        </li>
                    ))}
                    <li className="nav-item">
                        <a className="nav-link disabled" href="#"><Oclock/></a>
                    </li>
                </ul>
                <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
            </div>
        </nav>
    );
}
