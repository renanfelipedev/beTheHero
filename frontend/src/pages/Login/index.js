import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import api from '../../services/api';

import './styles.css';

export default function Login() {
  const [id, setId] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      const response = await api.post('/sessions', { id });
      localStorage.setItem('ongId', id);
      localStorage.setItem('ongName', response.data.name);
      history.push('/profile');
    } catch (error) {
      alert('Falha ao realizar o login, tente novamente.');
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img src={logoImg} alt="Be the hero logo" />

        <form onSubmit={(e) => handleLogin(e)}>
          <h1>Faça seu logon</h1>
          <input
            type="text"
            placeholder="Sua ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button type="submit" className="button">
            Entrar
          </button>
        </form>

        <Link to="/register" className="back-link">
          <FiLogIn size={16} color="#e02041" />
          Não possuo cadastro
        </Link>
      </section>

      <img src={heroesImg} alt="Group of heroes" />
    </div>
  );
}
