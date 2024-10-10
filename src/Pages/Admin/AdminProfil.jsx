import React from 'react';
import '../../Css/Admincss/AdminDashboard.css';
import avatar from '../../Assets/avatar.png';
import Sidebar from '../../Components/SideBar'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBell, faEnvelope } from '@fortawesome/free-solid-svg-icons';

function AdminDashboard() {
    return (
        <div className='contenu '>
                                          <Sidebar/>

            <div className='contenu-right'>
                <div className="dashboard-header">
                    <h4 className='dashboard'>Dashboard</h4>
                    <p>Friday · September 20, 2021 · 12:16 PM</p>
                    <div className="icons">
                        <FontAwesomeIcon icon={faBell} className="header-icon" title="Notifications" />
                        <FontAwesomeIcon icon={faEnvelope} className="header-icon" title="Messages" />
                        <FontAwesomeIcon icon={faUser} className="header-icon" title="Profile" />
                    </div>
                </div>
                <div className="profile-page">
                    {/* Header Section */}
                    <div className="profile-header">
                        <img src={avatar} alt="Profile" className="profile-picture" />
                        <h2>Tiavina Aurelien</h2>
                     
                    </div>

                    {/* Personal Info Section */}
<div className='card-personnal'>
                    <div className="profile-section personal-info">
                        <div className='personal-name'>
                        <h3>Personal Information</h3>
                        </div>
                        <ul>
                            <li><strong>Nom complet:</strong> Tiavina Aurelien</li>

                            <li><strong>Email:</strong> tiavinaaurelien.com</li>
                            <li><strong>Role:</strong> Admin</li>
                        </ul>
                    </div>

                    <div className="profile-section settings">
                    <div className='personal-name'>

                        <h3>Settings</h3>
                        </div>
                        <button className="btn btn-primary">Change Password</button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
