import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { createContext } from 'react';
import { auth } from '../Firebase/firebase.init';

export const AuthContext = createContext(null);

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
        return signOut(auth);
    }


    const userInfo ={
        user,
        loading,
        setUser,
        createUser,
        logOut
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
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