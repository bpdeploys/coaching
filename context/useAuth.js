import React, { createContext, useState, useContext, useEffect } from 'react';
import { login as loginService, fetchUserData } from '../services';
import Router from 'next/router';

const AuthContext = createContext({
  userInfo: null,
  isLoading: false,
  login: async (credentials) => {},
  logout: () => {},
  refreshAuth: async () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const initializeAuth = async () => {
      const savedUserInfo = localStorage.getItem('userInfo');
      if (savedUserInfo) {
        setUserInfo(JSON.parse(savedUserInfo));
      }

      const token = localStorage.getItem('TOKEN');
      if (token) {
        try {
          const data = await fetchUserData(token);
          setUserInfo(data);
          localStorage.setItem('userInfo', JSON.stringify(data));
        } catch (error) {
          console.error('Error fetching user data:', error);
          localStorage.removeItem('TOKEN');
          localStorage.removeItem('userInfo');
          setUserInfo(null);
        }
      }
    };

    initializeAuth();
  }, []);

  const refreshAuth = async () => {
    const token = localStorage.getItem('TOKEN');
    if (token) {
      setIsLoading(true);
      try {
        const data = await fetchUserData(token);
        setUserInfo(data);
        localStorage.setItem('userInfo', JSON.stringify(data));
      } catch (error) {
        console.error('Error fetching user data:', error);
        localStorage.removeItem('TOKEN');
        localStorage.removeItem('userInfo');
        setUserInfo(null);
      } finally {
        setIsLoading(false);
      }
    } else {
      setUserInfo(null);
    }
  };

  const login = async (credentials) => {
    setIsLoading(true);
    try {
      const data = await new Promise((resolve, reject) => {
        loginService(
          credentials,
          (response) => resolve(response),
          (error) => reject(error)
        );
      });

      if ('key' in data) {
        localStorage.setItem('TOKEN', data.key);
        const userData = await fetchUserData(data.key);
        setUserInfo(userData);
        localStorage.setItem('userInfo', JSON.stringify(userData));
        Router.push('/insights');
      } else {
        throw new Error('Login failed: No key in response');
      }
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('TOKEN');
    localStorage.removeItem('userInfo');
    setUserInfo(null);
    Router.push('/');
  };

  const contextValue = {
    userInfo,
    isLoading,
    login,
    logout,
    refreshAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
