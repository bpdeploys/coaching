// import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import { createContext, useEffect, useReducer } from 'react';
import Login from './pages/login';
import { login } from './services';

export const appContext = createContext({
  userInfo: {
    mail: '',
    pass: '',
  },
  logged: '',
  token: '',
  setUserInfo: (mail, pass) => {},
  toggleLogin: () => {},
  setToken: token => {},
});

const INITIAL_STATE = {
  userInfo:
    typeof window !== 'undefined'
      ? JSON.parse(window.localStorage.getItem('CREDENTIALS'))
      : '',
  logged: false,
  token:
    typeof window !== 'undefined' ? window.localStorage.getItem('TOKEN') : '',
};

const reducer = (state, action) => {
  const { type, payload } = action;

  if (type === 'USERDATA')
    return {
      ...state,
      userInfo: {
        mail: payload.mail,
        pass: payload.pass,
      },
    };

  if (type === 'TOKEN') return { ...state, token: payload };

  if (type === 'LOGIN') return { ...state, logged: !state.logged };

  return state;
};

const AppProvider = ({ children }) => {
  const [appState, dispatch] = useReducer(reducer, INITIAL_STATE);
  const { userInfo, token, logged } = appState;

  // console.log(userInfo);
  // console.log(logged);

  const setUserInfoHandler = (mail, pass) =>
    dispatch({
      type: 'USERDATA',
      payload: { mail, pass },
    });

  const setTokenHandler = token =>
    dispatch({
      type: 'TOKEN',
      payload: token,
    });

  const toggleLoginHandler = () =>
    dispatch({
      type: 'LOGIN',
    });

  useEffect(() => {
    if (userInfo?.mail && userInfo?.pass) {
      login(
        {
          email: userInfo.mail,
          password: userInfo.pass,
        },
        data => {
          if (data.key) {
            setTokenHandler(data.key);
            toggleLoginHandler();
            return true;
          } else {
            return false;
          }
        },
        err => console.log(err.message)
      );
    }
  }, []);

  useEffect(() => {
    if (logged) {
      window.localStorage.setItem('TOKEN', token);
      window.localStorage.setItem('CREDENTIALS', JSON.stringify(userInfo));
    }
    // console.log(token);

    // if (!logged) window.localStorage.removeItem('TOKEN');
  }, [logged]);

  return (
    <appContext.Provider
      value={{
        logged,
        token,
        userInfo,
        setUserInfo: setUserInfoHandler,
        toggleLogin: toggleLoginHandler,
        setToken: setTokenHandler,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export default AppProvider;

// export const Context = React.createContext();

// export const { Provider, Consumer } = Context;

// class DynamicProvider extends Component {
//   render() {
//     const {
//       props: { children, userInfo },
//       state,
//     } = this;
//     return (
//       <React.Fragment>
//         <Provider value={{ ...state, ...this.props }}>{children}</Provider>
//       </React.Fragment>
//     );
//   }
// }

// DynamicProvider.propTypes = {
//   children: PropTypes.node.isRequired,
// };

// // eslint-disable-next-line react/no-multi-comp
// export const withContext = WrappedComponent => {
//   // eslint-disable-next-line react/no-multi-comp
//   return React.forwardRef((props, ref) => (
//     // eslint-disable-next-line react/no-multi-comp
//     <Consumer>
//       {propsConsumer => (
//         <WrappedComponent {...propsConsumer} {...props} ref={ref} />
//       )}
//     </Consumer>
//   ));
// };

// export default DynamicProvider;
