import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import heroesImg from '../../assets/heroes.png';

import { useAuth } from '../../hooks/auth';

import './styles.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const { login } = useAuth();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      await login({ email, password });
      history.push('/profile');
    } catch (error) {
      console.log(error);
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
            name="email"
            type="email"
            placeholder="Seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Sua senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
