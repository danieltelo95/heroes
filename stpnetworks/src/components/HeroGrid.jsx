// src/components/HeroGrid.js

import React from "react";
import batman from "../assets/images/batman.jpg"; // Importa las imágenes de los superhéroes
import spiderMan from "../assets/images/spiderman.jpg";
import superman from "../assets/images/super_man.jpg"; // Asegúrate de importar la imagen correcta
import thor from "../assets/images/thor.jpg";

const superheroes = [
    { name: "Batman", image: batman },
    { name: "Spider-Man", image: spiderMan },
    { name: "Superman", image: superman },
    { name: "Thor", image: thor },
];

const HeroGrid = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 p-4 mt-16 mb-8 ml-8 mr-8 px-16 ">
            {superheroes.map((hero, index) => (
                <div key={index} className="relative flex flex-col bg-black bg-opacity-30 overflow-hidden">
                    <img 
                        src={hero.image} 
                        alt={hero.name} 
                        className="w-full h-64 object-cover md:h-72 lg:h-80" // Ajusta la altura de la imagen
                    />
                    <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-center text-white font-bold text-xl px-2 rounded">
                        {hero.name}
                    </p>
                </div>
            ))}
        </div>
    );
}

export default HeroGrid;
