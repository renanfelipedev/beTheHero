import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';

import logoImg from '../../assets/logo.svg';

import api from '../../services/api';

import './styles.css';

export default function NewIncident() {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');

  const ongId = localStorage.getItem('ongId');

  const history = useHistory();

  async function handleNewIncident(e) {
    e.preventDefault();

    const data = {
      title,
      value,
      description,
    };

    try {
      await api.post('/incidents', data, {
        headers: { Authorization: ongId },
      });

      history.push('/profile');
    } catch (error) {
      alert('Não foi possível cadastrar novo caso.');
      console.log(error.data);
    }
  }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logoImg} alt="Be the hero logo" />
          <h1>Cadastrar novo caso</h1>
          <p>
            Descreva seu caso detalhadamente, para encontrar um herói para
            resolvê-lo.
          </p>

          <Link to="/profile" className="back-link">
            <FiArrowLeft size={16} color="#e02041" />
            Voltar para o perfil
          </Link>
        </section>

        <form onSubmit={(e) => handleNewIncident(e)}>
          <input
            placeholder="Título do caso"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <textarea
            placeholder="Descrição"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
          <input
            placeholder="Valor em reais"
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <button type="submit" className="button">
            Cadastrar
          </button>
        </form>
      </div>
    </div>
  );
}
