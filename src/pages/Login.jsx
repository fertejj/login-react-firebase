import React, { useContext } from 'react'
import { FaGoogle } from 'react-icons/fa'
import { AuthContext } from '../context/AuthContext'
import '../css/_loginPage.css'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate()
    const { login, userLogin} = useContext(AuthContext);

    const handleLogin = async () => {
       await login()
       navigate("/")
    }
  return (
    <div className='login-container'>
        <h1>Inicia Sesion</h1>
        <button onClick={handleLogin} className='button-google'><FaGoogle/>Google</button>
    </div>

  )
}

export default Login