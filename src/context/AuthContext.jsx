import React, { createContext, useEffect, useState } from 'react'
import { auth } from '../firebase/firebase'
import { signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext()

const login = async () => {
    const googleProvider = new GoogleAuthProvider()
    await signInWithPopup(auth, googleProvider)
}

const cerrarSesion = () => {
    signOut(auth)
}

const handleCerrarSesion = async () => {
    await cerrarSesion()
  }


export function AuthProvider ({children}){
    const navigate = useNavigate()
    const  [userLogin, setUserLogin] = useState(null)
    const  [userLoading, setUserLoading] = useState(true)
    useEffect(() => {
        onAuthStateChanged(auth, (user)=>{
            if(user){
                setUserLogin(user)
                navigate('/')
            } else {
                setUserLogin(null)
            }
            setUserLoading(false)
        })
    }, [])
    return <AuthContext.Provider value={{ cerrarSesion, login, userLogin, userLoading, handleCerrarSesion}}>
        {children}

    </AuthContext.Provider>
}