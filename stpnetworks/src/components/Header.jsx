import React from "react";
import heroes from '../assets/images/awesome_heroes.png'

const Header = () => {

    return(
        <div className="text-white flex justify-between p-4 w-full">
            <img className="-mt-16 mb-14" src={heroes}></img>
            <nav className="flex space-x-4">
                <a>Heroes Anteriores</a>
                <a>¿Cómo funciona?</a>
                <a>Iniciar Sesión</a>
                <a>Lupa</a>
            </nav>
        </div>
    )

}

export default Header;