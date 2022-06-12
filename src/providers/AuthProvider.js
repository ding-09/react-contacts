import React, { useState, createContext, useContext } from 'react';

// create Auth context
const AuthContext = createContext();

export const AuthProvider = (props) => {
  // initial state - no user currently logged in
  const [loggedIn, setLoggedIn] = useState(null);

  // login a user
  // accept username and password as parameters
  const login = (username, password) => {
    // check if username and password are correct
    // if validated, set username as loggedIn user
    // setLoggedIn(username)
    // if no match, throw error
  };

  const logout = () => {
    // set logged in user to null
    // setLoggedIn(null)
  };

  const value = { loggedIn, login, logout };
  return (
    <AuthContext.Provider value={value}>{props.children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
