import React from "react";

const Header = () => {

    return(
        <div className="text-white flex justify-between p-4 w-full ">
            <a>Logo</a>
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