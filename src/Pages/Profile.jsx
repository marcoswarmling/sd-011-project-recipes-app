import React from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import FooterBar from './Components/FooterBar';
// import PropTypes from 'prop-types';

function Profile() {
  const userEmail = JSON.parse(localStorage.getItem('user')) || {};
  const history = useHistory();

  function Leave() {
    localStorage.clear();
    history.push('/');
  }

  return (
    <>
      <div>
        <h1 data-testid="page-title">Perfil</h1>
        <img
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="Botão que direciona para a tela de perfil"
        />
      </div>
      <div data-testid="profile-email">{userEmail && userEmail.email}</div>
      <button
        type="button"
        data-testid="profile-done-btn"
        onClick={ () => history.push('/receitas-feitas') }
      >
        Receitas Feitas
      </button>

      <button
        type="button"
        data-testid="profile-favorite-btn"
        onClick={ () => history.push('/receitas-favoritas') }
      >
        Receitas Favoritas
      </button>
      <button
        type="button"
        data-testid="profile-logout-btn"
        onClick={ () => Leave() }
      >
        Sair
      </button>
      <FooterBar />
    </>
  );
}

export default Profile;
