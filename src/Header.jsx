import reactDom from "react-dom";
import React from "react";
import "./Header.css"
import "./Style.css"


function Header() {
    return (
        <div className="header" id="home">
            <div className="container ">
                <i className="fa fa-phone-square mr-5 mt-5">+02 213 - 256 (365)</i> 
                <button className="btn btn-danger mt-1">BECOME A VOLUNTEER</button>
            </div>
        </div>

    );

}
export default Header; 