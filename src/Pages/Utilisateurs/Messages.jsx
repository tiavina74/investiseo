import React from 'react'
import '../../Css/Utilisateurscss/Messages.css';
import avatar from '../../Assets/avatar.png';
import NavBar from '../../Components/NavBar';


function Messages() {
  return (
   <div>
         <NavBar/>
  


    

      <section className='message-profils'>
      <div className='message-search'>
          <h4>Messages</h4>

          <div className='search-page'>
            <select className='form-select'>
              <option value="">All chats</option>
              <option value="">Non lus</option>
              <option value="">Archive</option>
            </select>
            <input type="text" className='search form-control' placeholder='Rechercher' ></input>
            <button className='btn btn-primary' type=""><i class="fa fa-search"></i></button>
          </div>
        </div>

        <div className='message-tout'>
          <div className='message-item'>
            <img src={avatar} alt="Profil" className='profile-pic' />
            <div className='message-info'>
              <h5>Tiavina Aurelien</h5>
              <p>Aona ny projet ao?</p>
              <span className='message-time'>12:00 PM</span>
            </div>
          </div>
          <div className='message-item'>
            <img src={avatar} alt="Profil" className='profile-pic' />
            <div className='message-info'>
              <h5>Anthonias Skyess</h5>
              <p>Aya lah zao</p>
              <span className='message-time'>11:45 AM</span>
            </div>
          </div>
          <div className='message-item'>
            <img src={avatar} alt="Profil" className='profile-pic' />
            <div className='message-info'>
              <h5>Anthonias Skyess</h5>
              <p>Aya lah zao</p>
              <span className='message-time'>11:45 AM</span>
            </div>
          </div>
          <div className='message-item'>
            <img src={avatar} alt="Profil" className='profile-pic' />
            <div className='message-info'>
              <h5>Anthonias Skyess</h5>
              <p>Aya lah zao</p>
              <span className='message-time'>11:45 AM</span>
            </div>
          </div>
          <div className='message-item'>
            <img src={avatar} alt="Profil" className='profile-pic' />
            <div className='message-info'>
              <h5>Anthonias Skyess</h5>
              <p>Aya lah zao</p>
              <span className='message-time'>11:45 AM</span>
            </div>
          </div>
          <div className='message-item'>
            <img src={avatar} alt="Profil" className='profile-pic' />
            <div className='message-info'>
              <h5>Anthonias Skyess</h5>
              <p>Aya lah zao</p>
              <span className='message-time'>11:45 AM</span>
            </div>
          </div>
          <div className='message-item'>
            <img src={avatar} alt="Profil" className='profile-pic' />
            <div className='message-info'>
              <h5>Manirisoa Maharavo</h5>
              <p>Efa nahita stage ve?</p>
              <span className='message-time'>10:30 AM</span>
            </div>
          </div>
          {/* Ajoutez d'autres messages ici */}
        </div>
      </section>
      </div>
  )
}

export default Messages
