import React from "react"
import logo from './udentify.jpeg';
import "./style.css"
import { NavLink } from "react-router-dom";
import Nav from 'react-bootstrap/Nav';

export default function Header() {

    return (
        <Nav className="nav">
            <img src={logo} className="App-logo" alt="logo" />
            <NavLink to="/Table" className="table--header"> Table </NavLink>
            <NavLink to="/" className="contact--header"> Contact Form </NavLink>
            <a href="https://www.udentify.co" target="_blank" className="web--header"> Web Page </a>
        </Nav>
    )
}