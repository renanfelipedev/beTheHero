import React, { createContext, useContext, useCallback, useState } from 'react';

import api from '../services/api';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
  const [data, setData] = useState(() => {
    const token = localStorage.getItem('@BeTheHero:token');
    const ong = localStorage.getItem('@BeTheHero:ong');

    if (token && ong) {
      return { token, ong: JSON.parse(ong) };
    }

    return {};
  });

  const login = useCallback(async ({ email, password }) => {
    const response = await api.post('/sessions', { email, password });

    const { token, ong } = response.data;

    localStorage.setItem('@BeTheHero:token', token);
    localStorage.setItem('@BeTheHero:ong', JSON.stringify(ong));

    setData({ token, ong });
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem('@BeTheHero:token');
    localStorage.removeItem('@BeTheHero:ong');

    setData({});
  }, []);

  return (
    <AuthContext.Provider value={{ login, logout, ong: data.ong }}>
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used with an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };
