import React, { useEffect, useState, useMemo } from 'react';
import AuthContext from './AuthContext';
import { auth, googleProvider } from '../firebase/firebase.config';
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
  sendPasswordResetEmail,
} from 'firebase/auth';

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, current => {
      setUser(current);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const value = useMemo(
    () => ({
      user,
      loading,
      createUser: (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password); 
      },
      signIn: (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password); 
      },
      googleLogin: () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
      },
      signOutUser: () => signOut(auth),
      updateUserProfile: data => updateProfile(auth.currentUser, data),
      resetPassword: email => sendPasswordResetEmail(auth, email), 
    }),
    [user, loading]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
