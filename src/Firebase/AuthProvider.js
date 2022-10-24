import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/Firebase.init";

const auth = getAuth(app);

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUSer] = useState({});
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  // create user with email password

  const createUserEmailPassword = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // updateName
  const updateName = (name) => {
    setLoading(true)
    return updateProfile(auth.currentUser, {
      displayName: name,
    });
  };

  const emailVarification = () => {
    setLoading(true)
    return sendEmailVerification(auth.currentUser);
  };

  const loginWithGoogle=()=>{
    setLoading(true)
   return signInWithPopup(auth, googleProvider)
  }
  const loginWithGithub=()=>{
    setLoading(true)
   return signInWithPopup(auth, githubProvider)
  }

  const loginWithPass=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
  }
  const userLogOut=()=>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentuser) => {
      setUSer(currentuser);
      setLoading(false)
    });
  }, []);

  const contextInfo = {
    user,
    createUserEmailPassword,
    updateName,
    emailVarification,
    loginWithGoogle,
    loginWithGithub,
    loginWithPass,
    userLogOut,
    loading
  };
  return (
    <AuthContext.Provider value={contextInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
