import React from 'react';
import '../../Css/Admincss/AdminDashboard.css';
import diagram from '../../Assets/d.png';
import diagram1 from '../../Assets/P.png';
import Sidebar from '../../Components/SideBar'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faList, faBell, faEnvelope, faProjectDiagram, faFileAlt, faTrophy,  faUsers,  faEllipsisV } from '@fortawesome/free-solid-svg-icons';

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


                <div className="dashboard-cards-container">
                    <div className="dashboard-card bleu">
                        <div className="card-title">Entrepreneurs</div>
                        <div className="card-value">40</div>
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faUsers} />
                        </div>
                    </div>

                    <div className="dashboard-card orange">
                        <div className="card-title">Investisseurs</div>
                        <div className="card-value">27</div>
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faUser} />
                        </div>
                    </div>

                    <div className="dashboard-card vert">
                        <div className="card-title">Inscriptions</div>
                        <div className="card-value">100</div>
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faList} />
                        </div>
                    </div>

                    <div className="dashboard-card yellow">
                        <div className="card-title">Projets</div>
                        <div className="card-value">200</div>
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faProjectDiagram} />
                        </div>
                    </div>

                    <div className="dashboard-card red">
                        <div className="card-title">Publications</div>
                        <div className="card-value">1320</div>
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faFileAlt} />
                        </div>
                    </div>

                    <div className="dashboard-card violet">
                        <div className="card-title">Badges</div>
                        <div className="card-value">320</div>
                        <div className="card-icon">
                            <FontAwesomeIcon icon={faTrophy} />
                        </div>
                    </div>
                </div>

                <div className="diagrams-container">
                    <div className="diagram-boxx">
                        <div className="diagram-title">
                            <p>Diagram 1</p>
                        </div>
                        <FontAwesomeIcon icon={faEllipsisV} className="menu-icon" />
                        <div className='diagram-photoo'>
                            <img src={diagram} className='img' alt="" />
                        </div>
                    </div>
                    <div className="diagram-box">
                        <div className="diagram-title">
                            <p>Diagram 1</p>
                        </div>
                        <FontAwesomeIcon icon={faEllipsisV} className="menu-icon" />
                        <div className='diagram-photo'>
                            <img src={diagram1} className='imgg' alt="" />
                        </div>
                        {/* Placeholder for the first diagram */}
                    </div>
                </div>

                <div className='tableau'>
                    <div className="table-section">
                        <div className="table-title">
                            <div className='titre'>
                                <h5>Historiques</h5>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between mb-3">
                            <input type="text" className="form-control serch" placeholder="Search..." />
                            <select className="form-select sele">
                                <option value="">Select Date</option>
                                <option value="2023-01-01">2023-01-01</option>
                                <option value="2023-02-01">2023-02-01</option>
                                <option value="2023-03-01">2023-03-01</option>
                            </select>
                        </div>
                        <table className="tableaux table table-bordered">
                            <thead className='table-light'>
                                <tr>
                                    <th style={{ width: '5%' }}>Id</th>
                                    <th style={{ width: '25%' }} data-sortable='true'>Nom</th>
                                    <th style={{ width: '20%' }}>Role</th>
                                    <th style={{ width: '25%' }}>Date d'inscription</th>
                                    <th style={{ width: '25%' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>tohn Doe</td>
                                    <td>Admin</td>
                                    <td>2023-01-01</td>
                                    <td>Active</td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>aane Smith</td>
                                    <td>User</td>
                                    <td>2023-02-01</td>
                                    <td>Inactive</td>
                                </tr>
                                {/* More rows as needed */}
                            </tbody>
                        </table>


                    </div>
                    <nav className='foot' aria-label="Page navigation">
                        <ul className="pagination ">
                            <li className="page-item">
                                <a className="page-link" href="?page=previous" aria-label="Previous">
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                            <li className="page-item"><a className="page-link" href="?page=1">1</a></li>
                            <li className="page-item"><a className="page-link" href="?page=2">2</a></li>
                            <li className="page-item"><a className="page-link" href="?page=3">3</a></li>
                            <li className="page-item"><a className="page-link" href="?page=4">4</a></li>
                            <li className="page-item"><a className="page-link" href="?page=5">5</a></li>
                            <li className="page-item"><a className="page-link" href="?page=6">6</a></li>
                            <li className="page-item">
                                <a className="page-link" href="?page=next" aria-label="Next">
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        </ul>
                    </nav>

                </div>

            </div>
        </div>
    );
}

export default AdminDashboard;
