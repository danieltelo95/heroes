import React from "react";
import heroes from '../assets/images/awesome_heroes.png'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const Header = () => {

    return(
        <div className="text-white font-bold font-montserrat flex justify-between p-4 w-full">
            <img className="-mt-16 mb-14" src={heroes}></img>
            <nav className="flex space-x-4">
                <a>Heroes Anteriores</a>
                <a>¿Cómo funciona?</a>
                <a>Iniciar Sesión</a>
                <MagnifyingGlassIcon className="h-6 w-6"/>
            </nav>
        </div>
    )

}

export default Header;