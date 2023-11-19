import React from "react";
import './NavBar.css';
import logo from '../../assets/logo.png';
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="NavBar">
            <img src={logo} alt="Logo" className="logo" />
            <div className="desktopMenu">
                <RouterLink to="/" className="desktopMenuItem">Home</RouterLink>
                <RouterLink to="/about" className="desktopMenuItem">About</RouterLink>
                <RouterLink to="/contact" className="desktopMenuItem">Contact</RouterLink>
            </div>
        </nav>
    );
};

export default NavBar;
