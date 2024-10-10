import React from 'react';
import Sidebar from '../../Components/SideBar'

import '../../Css/Admincss/AdminDashboard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserCheck,faEnvelope,faBell, faUserTimes, faUserShield, faUserAltSlash, faCalendarPlus , faUser} from '@fortawesome/free-solid-svg-icons';

function AdminCompte() {
    return (
        <div className='contenu '>
                    <Sidebar/>

            <div className='contenu-right'>
            <div className="dashboard-header">
                    <h4 className='dashboard'>Compte</h4>
                    <p>Friday · September 20, 2021 · 12:16 PM</p>
                    <div className="icons">
                        <FontAwesomeIcon icon={faBell} className="header-icon" title="Notifications" />
                        <FontAwesomeIcon icon={faEnvelope} className="header-icon" title="Messages" />
                        <FontAwesomeIcon icon={faUser} className="header-icon" title="Profile" />
                    </div>
                </div>

                <div className="dashboard-cards-container">
    <div className="dashboard-card bleu">
        <div className="card-title">Total des utilisateurs</div>
        <div className="card-value">40</div>
        <div className="card-icon">
            <FontAwesomeIcon icon={faUsers} />
        </div>
    </div>

    <div className="dashboard-card orange">
        <div className="card-title">Comptes actifs</div>
        <div className="card-value">200</div>
        <div className="card-icon">
            <FontAwesomeIcon icon={faUserCheck} />
        </div>
    </div>

    <div className="dashboard-card red">
        <div className="card-title">Comptes suspendus</div>
        <div className="card-value">1320</div>
        <div className="card-icon">
            <FontAwesomeIcon icon={faUserTimes} />
        </div>
    </div>

    <div className="dashboard-card violet">
        <div className="card-title">Comptes certifiés</div>
        <div className="card-value">320</div>
        <div className="card-icon">
            <FontAwesomeIcon icon={faUserShield} />
        </div>
    </div>

    <div className="dashboard-card yellow">
        <div className="card-title">Comptes inactifs</div>
        <div className="card-value">320</div>
        <div className="card-icon">
            <FontAwesomeIcon icon={faUserAltSlash} />
        </div>
    </div>

    <div className="dashboard-card vert">
        <div className="card-title">Inscriptions ce mois</div>
        <div className="card-value">320</div>
        <div className="card-icon">
            <FontAwesomeIcon icon={faCalendarPlus} />
        </div>
    </div>
</div>

             

                <div className='tableau'>
                    <div className="table-section">
                        <h5 className="table-title">Historiques des inscriptions</h5>
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
      <th style={{ width: '5%' }}>ID</th>
      <th style={{ width: '15%' }}>Nom Complet</th>
      <th style={{ width: '15%' }}>Email</th>
      <th style={{ width: '10%' }}>Rôle</th>
      <th style={{ width: '10%' }}>Statut</th>
      <th style={{ width: '15%' }}>Date d'Inscription</th>
      <th style={{ width: '10%' }}>Badge</th>
      <th style={{ width: '10%' }}>Dernière Activité</th>
      <th style={{ width: '20%' }}>Actions</th>
    </tr>
  </thead>
  <tbody>
    <tr className="table-success">
      <td>1</td>
      <td>John Doe</td>
      <td>john.doe@example.com</td>
      <td>Entrepreneur</td>
      <td>Actif</td>
      <td>01/01/2024</td>
      <td>Oui</td>
      <td>12/09/2024</td>
      <td>
        <i className="fas fa-eye" title="Voir Détails"></i>&nbsp;
        <i className="fas fa-edit" title="Modifier"></i>&nbsp;
        <i className="fas fa-ban" title="Suspendre"></i>
      </td>
    </tr>
    <tr className="table-danger">
      <td>2</td>
      <td>Jane Smith</td>
      <td>jane.smith@example.com</td>
      <td>Investisseur</td>
      <td>Suspendu</td>
      <td>10/02/2024</td>
      <td>Non</td>
      <td>20/08/2024</td>
      <td>
        <i className="fas fa-eye" title="Voir Détails"></i>&nbsp;
        <i className="fas fa-edit" title="Modifier"></i>&nbsp;
        <i className="fas fa-check-circle" title="Réactiver"></i>
      </td>
    </tr>
    {/* Add more rows as needed */}
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

export default AdminCompte;
