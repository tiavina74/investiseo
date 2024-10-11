import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './Css/Layout.css';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import LoginAdmin from './Pages/Admin/LoginAdmin';
import AdminDashboard from './Pages/Admin/AdminDashboard';
import AdminCompte from './Pages/Admin/AdminCompte';
import AdminCertificat from './Pages/Admin/AdminCertificat';
import AdminPublication from './Pages/Admin/AdminPublication';
import AdminProfil from './Pages/Admin/AdminProfil';
import AdminAbonnements from './Pages/Admin/AdminAbonnements';
import Messages from './Pages/Utilisateurs/Messages';
import NavBar from './Components/NavBar';



import SideBar from './Components/SideBar';

function App() {
  return (
    <Router>
      <Routes>
        {/* Route publique : page de connexion */}
        <Route path="/" element={<LoginAdmin />} />
        <Route path="/SideBar" element={<SideBar />} />
        <Route path="/NavBar" element={<NavBar />} />

        {/* Routes admin, accessible sans authentification */}
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/compte" element={<AdminCompte />} />
        <Route path="/admin/certificat" element={<AdminCertificat />} />
        <Route path="/admin/publication" element={<AdminPublication />} />
        <Route path="/admin/profil" element={<AdminProfil />} />
        <Route path="/admin/abonnements" element={<AdminAbonnements />} />

        <Route path="/utilisateurs/messages" element={<Messages />} />


      </Routes>
    </Router>
  );
}

export default App;
