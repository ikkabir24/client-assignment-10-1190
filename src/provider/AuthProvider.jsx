import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config"
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();

export const AuthContext = createContext();

const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [userLoad, setUserLoad] = useState(true);


    // create a user using email and pass
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // login functionality
    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user info
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }

    // signin in google
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider);
    }

    // signout function
    const logOut = () => {
        return signOut(auth);
    }


    // set observer
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setUserLoad(false);
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const authData = {
        createUser,
        login,
        logOut,
        updateUser,
        googleSignIn,
        user,
        setUser,
        userLoad,
        setUserLoad
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>;
};

export default AuthProvider;