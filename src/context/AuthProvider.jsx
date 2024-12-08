import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext(null);

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(user);

    //createUser
    const createUser =(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    //logOut
    const logOut =() =>{
        setLoading(true);
        return signOut(auth);
    }
    
    //signInUser
    const signInUser =(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    //signUp With Pop Up
    const signInWithGoogle =() =>{
        return signInWithPopup(auth,provider);
    }

    //updateUserProfile
    const updateUserProfile = (updateData)=>{
        return updateProfile(auth.currentUser,updateData);
    }


    const userInfo ={
        user,
        loading,
        setUser,
        createUser,
        logOut,
        signInUser,
        signInWithGoogle,
        updateUserProfile
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])


    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;