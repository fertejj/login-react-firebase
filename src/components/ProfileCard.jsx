import React, {useContext} from 'react'
import { AuthContext } from '../context/AuthContext'
import '../css/_profileCard.css'


const ProfileCard = () => {
const {handleCerrarSesion, userLogin} = useContext(AuthContext)
console.log(userLogin);
  return (
    <div className="container">
        <div className="imagen">
            <img src={userLogin.photoURL} alt="foto de perfil" />
        </div>
        <h3>{userLogin.displayName}</h3>
        <h6>Ultima conexión: {userLogin.metadata.lastSignInTime}</h6>
        <button className="btn-cerrar-sesion" onClick={handleCerrarSesion}>Cerrar Sesion</button>
    </div>
  )
}

export default ProfileCard