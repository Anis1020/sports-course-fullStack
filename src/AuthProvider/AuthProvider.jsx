import React, { createContext, useEffect, useState } from "react";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../firebaseConfig/firebaseConfig";
import axios from "axios";

export const AuthContext = createContext();
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setSetError] = useState(null);
  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInByGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);

      //get and set user
      if (currentUser) {
        axios
          .post("https://assignment-12-sever-side-anis1020.vercel.app/jwt", {
            email: currentUser.email,
          })
          .then((data) => {
            // console.log(data.data);
            localStorage.setItem("secret-token", data.data);
          });
      } else {
        localStorage.removeItem("secret-token");
      }
      setLoading(false);
    });
    return () => {
      unSubscribe;
    };
  }, []);

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
  };

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const userLogOut = () => {
    return signOut(auth);
  };
  const userInfo = {
    user,
    loading,
    setLoading,
    createUser,
    loginUser,
    signInByGoogle,
    userLogOut,
    updateUserProfile,
    sendPasswordResetEmail,
  };
  return (
    <div>
      <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
