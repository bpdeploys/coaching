import { BASE_URL } from '../http';

export const login = ({ email, password }, resCallback, errCallback) => {
  return fetch(`${BASE_URL}/auth/login/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: String(email),
      password: String(password),
    }),
  })
    .then((res) => res.json())
    .then(resCallback)
    .catch(errCallback);
};

export const register = (userData, resCallback, errCallback) => {
  return fetch(`${BASE_URL}/register/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((res) => res.json())
    .then(resCallback)
    .catch(errCallback);
};

export const fetchUserData = (token) => {
  return fetch(`${BASE_URL}/current-user/`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Token ${token}`,
    },
  }).then((res) => res.json());
  // .catch((err) => err);
};
