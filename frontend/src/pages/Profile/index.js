import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { useAuth } from '../../hooks/auth';

import api from '../../services/api';

import './styles.css';

export default function Profile() {
  const [incidents, setIncidents] = useState([]);
  const { ong, logout } = useAuth();

  const history = useHistory();

  const token = localStorage.getItem('@BeTheHero:token');

  useEffect(() => {
    async function fetchIncidents() {
      try {
        const response = await api.get(`/ongs/${ong.id}/incidents`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const { data } = response;

        setIncidents(data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchIncidents();
  }, [ong, token]);

  function handleLogout() {
    logout();
    history.push('/');
  }

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`/incidents/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setIncidents(incidents.filter((incident) => incident.id !== id));
    } catch (error) {
      alert('Erro ao deletar caso, tente novamente.');
    }
  }

  return (
    <div className="profile-container">
      <header>
        <img src={logoImg} alt="Be the hero logo" />
        <span>{`Bem vindo, ${ong.name}`}</span>
        <Link to="/incidents/new" className="button">
          Cadastrar novo caso
        </Link>
        <button type="button" onClick={handleLogout}>
          <FiPower size={16} color="#e02041" />
        </button>
      </header>

      <h1>
        {incidents.length > 0 ? 'Casos cadastrados' : 'Nenhum caso cadastrado'}
      </h1>
      <ul>
        {incidents &&
          incidents.map((incident) => (
            <li key={incident.id}>
              <strong>CASO: </strong>
              <p>{incident.title}</p>

              <strong>Descrição: </strong>
              <p>{incident.description}</p>

              <strong>VALOR: </strong>
              <p>
                {Intl.NumberFormat('pt-BR', {
                  style: 'currency',
                  currency: 'BRL',
                }).format(incident.value)}
              </p>

              <button onClick={() => handleDeleteIncident(incident.id)}>
                <FiTrash2 size={16} color="#a8a8b3" />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
