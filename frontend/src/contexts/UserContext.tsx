import React, { createContext, useState } from 'react';

export type UserContextType = {
  token: string | null;
  signIn: (token: string) => void;
  signOut: () => void;
}

const KEY = 'driven-pass-token-simone';

export const UserContext = createContext<UserContextType | null>(
  { token: null, 
    signIn: (s: string) => null,
    signOut: () => null,
  }
);

type Props = {
  children: JSX.Element;
}

function AuthProvider(props: Props) {
  const { children } = props;

  const localToken = localStorage.getItem(KEY);
  const [token, setToken ] = useState(localToken);
  
  function signIn(tokenSignIn: string) {
    setToken(tokenSignIn);
    localStorage.setItem(KEY, tokenSignIn);
  }

  function signOut() {
    localStorage.removeItem(KEY);
    setToken(null);
  }

  return (
    <UserContext.Provider value={{ token, signIn, signOut }}>
      { children }
    </UserContext.Provider>
  );
}

export default AuthProvider;