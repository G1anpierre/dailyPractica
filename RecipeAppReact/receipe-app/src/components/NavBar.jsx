import React from 'react';

import '../assets/styles/components/NavBar.scss';


const NavBar = ({isFormOpen}) => {

    

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" >Receipt App </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" >Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" >About</a>
                </li>
                <li className="nav-item">
                    <button
                    onClick = {isFormOpen} 
                    type ="button"
                    className="nav-link btn" 
                    href="#">New Receipe</button>

                </li>
                <li className="nav-item">
                    <a className="nav-link disabled"  aria-disabled="true">Contact Us</a>
                </li>
                </ul>
            </div>
        </nav>
    )
}


export default NavBar;