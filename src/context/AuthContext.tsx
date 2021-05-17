import React, { useState, createContext, useContext } from 'react';
import { IUser } from '../../types';

type AuthType = {
  isAuth: boolean;
  userData: IUser;
};

type PropsAuthContext = {
  state: AuthType;
  setState: React.Dispatch<React.SetStateAction<AuthType>>;
};

const DEFAULT_VALUE = {
  state: {
    isAuth: false,
    userData: {
      id: -1,
      firstName: 'Luís',
      lastName: 'Dourado',
      email: '',
    },
  },
  setState: () => {},
};

const AuthContext = createContext<PropsAuthContext>(DEFAULT_VALUE);
const AuthProvider: React.FC = ({ children }) => {
  const [state, setState] = useState(DEFAULT_VALUE.state);

  return (
    <AuthContext.Provider value={{ state, setState }}>
      {children}
    </AuthContext.Provider>
  );
};

function handleLogoff() {
  //const { state, setState } = useContext(AuthContext);
  alert('LogOff');
}

export { AuthContext, AuthProvider, handleLogoff };
