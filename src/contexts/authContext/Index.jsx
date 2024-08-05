// src/contexts/authContext/Index.js
import React, { createContext, useContext, useState, useEffect } from 'react';
import { auth } from "../../firebase/firebase"; // Import your firebase authentication instance

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const[userLoggedIn,setUserLoggedIn]=useState(false)

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(
      user => {
      setCurrentUser(user);
      setLoading(false);
      setUserLoggedIn(true)
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    userLoggedIn: !!currentUser,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
