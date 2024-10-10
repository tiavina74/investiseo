import React from 'react';
import { faUsers, faHome, faUser, faCertificate, faEdit } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../Css/Layout.css';

function SideBar() {
    const location = useLocation();

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <div className='sidebar'>
            <p className="menup">INVESTISEO</p>
            <hr />
            <ul>
                <li><Link to="/admin/dashboard">
                    <button className={`btn ${isActive('/admin/dashboard')}`}>
                        <FontAwesomeIcon icon={faHome} style={{ float: "left" , marginRight:"10px"}} />Dashboard
                    </button>
                </Link></li>

                <li><Link to="/admin/compte">
                    <button className={`btn ${isActive('/admin/compte')}`}>
                        <FontAwesomeIcon icon={faUser} style={{ float: "left" , marginRight:"10px"}} />Compte
                    </button>
                </Link></li>

                <li><Link to="/admin/certificat">
                    <button className={`btn ${isActive('/admin/certificat')}`}>
                        <FontAwesomeIcon icon={faCertificate} style={{ float: "left" , marginRight:"10px"}} />Certificat
                    </button>
                </Link></li>

                <li><Link to="/admin/clients">
                    <button className={`btn ${isActive('/admin/abonnements')}`}>
                        <FontAwesomeIcon icon={faUsers} style={{ float: "left", marginRight:"10px" }} />Abonnement
                    </button>
                </Link></li>

                <li><Link to="/admin/publication">
                    <button className={`btn ${isActive('/admin/publication')}`}>
                        <FontAwesomeIcon icon={faEdit} style={{ float: "left" , marginRight:"10px"}} />Publication
                    </button>
                </Link></li>
            </ul>
        </div>
    );
}

export default SideBar;
