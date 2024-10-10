import React from 'react';
import Sidebar from '../../Components/SideBar'
import '../../Css/Admincss/AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserCheck,faBell, faEnvelope, faUserTimes, faUserShield , faUser} from '@fortawesome/free-solid-svg-icons';

function AdminCertificat() {
    return (
        <div className='contenu '>
          <Sidebar/>
            <div className='contenu-right'>
            <div className="dashboard-header">
                    <h4 className='dashboard'>Certificat</h4>
                    <p>Friday · September 20, 2021 · 12:16 PM</p>
                    <div className="icons">
                        <FontAwesomeIcon icon={faBell} className="header-icon" title="Notifications" />
                        <FontAwesomeIcon icon={faEnvelope} className="header-icon" title="Messages" />
                        <FontAwesomeIcon icon={faUser} className="header-icon" title="Profile" />
                    </div>
                </div>


                <div className="dashboard-cards-container">
    <div className="dashboard-card bleu">
        <div className="card-title">Attribues</div>
        <div className="card-value">40</div>
        <div className="card-icon">
            <FontAwesomeIcon icon={faUsers} />
        </div>
    </div>

    <div className="dashboard-card orange">
        <div className="card-title">En attente</div>
        <div className="card-value">20</div>
        <div className="card-icon">
            <FontAwesomeIcon icon={faUserCheck} />
        </div>
    </div>

    <div className="dashboard-card  vert">
        <div className="card-title">Accepter</div>
        <div className="card-value">1320</div>
        <div className="card-icon">
            <FontAwesomeIcon icon={faUserTimes} />
        </div>
    </div>

    <div className="dashboard-card  red">
        <div className="card-title">Refuser</div>
        <div className="card-value">320</div>
        <div className="card-icon">
            <FontAwesomeIcon icon={faUserShield} />
        </div>
    </div>

   

  
</div>

             

                <div className='tableau'>
                    <div className="table-section">
                        <h5 className="table-title">Historiques des certificats</h5>
                        <div className="d-flex justify-content-between mb-3">
                            <input type="text" className="form-control serch" placeholder="Search..." />
                            <select className="form-select sele">
                                <option value="">Select Date</option>
                                <option value="2023-01-01">2023-01-01</option>
                                <option value="2023-02-01">2023-02-01</option>
                                <option value="2023-03-01">2023-03-01</option>
                            </select>
                            <select className="form-select sele">
                                <option value="">Role</option>
                                <option value="">Entrepreneurs</option>
                                <option value="">Investisseurs</option>
                            </select>
                            <select className="form-select sele">
                                <option value="">Secteur</option>
                                <option value="">Technologie</option>
                                <option value="">Agriculture</option>
                            </select>
                        </div>
                        <table className="tableaux table table-bordered">
                            <thead className='table-light'>
                                <tr>
                                    <th style={{ width: '5%' }}>Id</th>
                                    <th style={{ width: '20%' }} data-sortable='true'>Nom du beneficiaire</th>
                                    <th style={{ width: '20%' }}>Type de certificat</th>
                                    <th style={{ width: '20%' }}>Date d'émission</th>

                                    <th style={{ width: '25%' }}>Status</th>
                                    <th style={{ width: '20%' }}>Action</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr className="table-danger">
                                    <td>1</td>
                                    <td>Tiavina Aurelien</td>
                                    <td>Entrepreneurs</td>

                                    <td>2023-01-01</td>
                                    <td>Active</td>
                                    <td>Bon</td>

                                </tr>
                                <tr>
                                <td>1</td>
                                    <td>Tiavina Aurelien</td>
                                    <td>Entrepreneurs</td>

                                    <td>2023-01-01</td>
                                    <td>Active</td>
                                    <td>Bon</td>
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

export default AdminCertificat;
