import React from 'react';
import logo from '../Assets/logo.png'
import { Link } from 'react-router-dom'; // Importez Link depuis react-router-dom
import '../Css/NavBar.css'; // Importez le fichier CSS pour le style

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" className="logo" />
                <span className="platform-name">INVESTISEO</span>
            </div>
            <ul className="navbar-links">
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/messages">Messages</Link></li>
                <li><Link to="/notifications">Notifications</Link></li>
                <li><Link to="/profil">Profil</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
