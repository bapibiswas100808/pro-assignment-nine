import { createContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";
import toast from "react-hot-toast";
const auth = getAuth(app);

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (name, image) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: image,
    }).then(() => {
      setUser({ ...user, userName: name, photoURL: image });
      setLoading(false);
    });
  };
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider)
      .then((res) => {
        toast.success("Logged in Successfully");
        console.log(res.user);
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };
  const githubLogin = () => {
    setLoading(true);
    return signInWithPopup(auth, githubProvider)
      .then((res) => {
        toast.success("Logged in Successfully");
        console.log(res.user);
      })
      .catch((err) => {
        toast.error(err.message);
        console.log(err);
      });
  };
  const logOut = () => {
    setLoading(true);
    setUser(null);
    return signOut(auth);
  };
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);
  const authInfo = {
    user,
    setUser,
    loading,
    createUser,
    logOut,
    signIn,
    googleLogin,
    githubLogin,
    updateUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
