import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { auth } from '../../Firebase/Firebase.init';
import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser= (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn= (email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signInWithGoogle=()=>{
        return signInWithPopup(auth, provider);
    }
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })
        return () => {
            unsubscribe();
        }
    },[])

    const authInfo = {
        createUser,
        signIn,
        signInWithGoogle,
        user,
        loading
    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;