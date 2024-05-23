import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/FirebaseConfig"
import PropTypes from 'prop-types'; // ES6
import {
  FacebookAuthProvider, createUserWithEmailAndPassword,
  onAuthStateChanged, signInWithEmailAndPassword,
  signInWithPopup, signOut, GoogleAuthProvider,
  GithubAuthProvider,
  TwitterAuthProvider
} from "firebase/auth";


export const AuthContext = createContext(null)

const FirebaseProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  //console.log('user come from auth:', user)

  // Social auth provider
  const googleProvider = new GoogleAuthProvider();
  const fbProvider = new FacebookAuthProvider();
  const githubProvider = new GithubAuthProvider()
  const twitterProvider = new TwitterAuthProvider()

  // create user with email, pass
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // signin with email pass
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  // sign out a user
  const logOut = () => {
    setUser(null)
    signOut(auth)
  }

  // on auth state change
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      }
    })

  }, [])

  //Social Google 
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  }

  const fbLogin = ()=>{
    return signInWithPopup(auth, fbProvider);
  }

  const githubLogin = () =>{
    return signInWithPopup(auth, githubProvider)
  }

  const twitterLogin = ()=>{
    return signInWithPopup(auth, twitterProvider)
  }

  const allValues = {
    user,
    createUser,
    signInUser,
    logOut,
    googleLogin,
    fbLogin,
    githubLogin,
    twitterLogin
  }
  return (
    <AuthContext.Provider value={allValues}>
      {children}
    </AuthContext.Provider >
  );
};

FirebaseProvider.propTypes = {
  children: PropTypes.node
}

export default FirebaseProvider;