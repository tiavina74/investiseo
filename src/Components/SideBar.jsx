import React from 'react';
import { faUsers, faHome, faUser, faCertificate, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Css/Layout.css';
import logo from '../Assets/logo.png';

function SideBar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <div className='sidebar'>
                        <img src={logo} alt="" style={{width: 180, justifyContent: 'center'}}/>

            <hr />
            <ul>
                <li><Link to="/admin/dashboard">
                    <button className={`btn ${isActive('/admin/dashboard')}`}>
                        <FontAwesomeIcon icon={faHome} style={{ float: "left" , marginRight:"15px"}} />Dashboard
                    </button>
                </Link></li>

                <li><Link to="/admin/compte">
                    <button className={`btn ${isActive('/admin/compte')}`}>
                        <FontAwesomeIcon icon={faUser} style={{ float: "left" , marginRight:"15px"}} />Compte
                    </button>
                </Link></li>

                <li><Link to="/admin/certificat">
                    <button className={`btn ${isActive('/admin/certificat')}`}>
                        <FontAwesomeIcon icon={faCertificate} style={{ float: "left" , marginRight:"15px"}} />Certificat
                    </button>
                </Link></li>

                <li><Link to="/admin/abonnements">
                    <button className={`btn ${isActive('/admin/abonnements')}`}>
                        <FontAwesomeIcon icon={faUsers} style={{ float: "left", marginRight:"15px" }} />Abonnement
                    </button>
                </Link></li>

                <li><Link to="/admin/publication">
                    <button className={`btn ${isActive('/admin/publication')}`}>
                        <FontAwesomeIcon icon={faEdit} style={{ float: "left" , marginRight:"15px"}} />Publication
                    </button>
                </Link></li>
            </ul>
        </div>
    );
}

export default SideBar;
