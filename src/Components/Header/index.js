import React from "react"
import logo from './udentify.jpeg';
import "./style.css"


export default function Header() {

    
    return (
        <nav className="nav">
           
            <img src={logo} className="App-logo" alt="logo" />
            <div>
            
            <button className="navTable"> Table </button>
                </div>
                <a 
                    href="https://www.udentify.co/"
                    target="_blank"
                    rel="noreferrer"
                    className="header--project"
                >Web Site</a>
        </nav>
    )
}