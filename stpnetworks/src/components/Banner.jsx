/**
 * Banner Component
 * 
 * Este componente representa un banner que muestra una tarjeta de un superhéroe,
 * incluyendo botones para votar (me gusta / no me gusta) y un indicador de porcentajes
 * de los votos. También muestra el encabezado de la página y un fondo relacionado con el superhéroe.
 * 
 * Funcionalidades:
 * - Muestra el nombre del superhéroe, así como los votos acumulados de "me gusta" y "no me gusta".
 * - Permite a los usuarios interactuar y votar por el superhéroe, actualizando los valores de los votos
 *   en el localStorage para persistencia entre sesiones.
 * - Calcula y muestra el porcentaje de votos de "me gusta" y "no me gusta".
 * 
 * Estructura:
 * - `Header`: Componente para mostrar el encabezado.
 * - `Card`: Componente para mostrar información del superhéroe.
 * - Votación: Se utilizan íconos para representar los votos de "me gusta" y "no me gusta".
 * 
 * Uso:
 * ```jsx
 * <Banner />
 * ```
 */

import React, { useState, useEffect } from "react";
import Header from "./Header"; // Componente del encabezado de la página
import Card from "./Card"; // Componente que muestra la información del superhéroe
import data from '../data/votes.json'; // Datos de votos en formato JSON
import ironman from '../assets/images/iron_man.jpg'; // Imagen de fondo del superhéroe
import { HandThumbUpIcon } from "@heroicons/react/24/solid"; // Ícono para el botón de "me gusta"
import { HandThumbDownIcon } from "@heroicons/react/24/solid"; // Ícono para el botón de "no me gusta"

const Banner = () => {
    const [likes, setLikes] = useState(0); // Estado para almacenar los "me gusta"
    const [dislikes, setDislikes] = useState(0); // Estado para almacenar los "no me gusta"

    useEffect(() => {
        // Inicializa los contadores de votos desde el archivo de datos
        setLikes(data[0].likes);
        setDislikes(data[0].dislikes);

        // Recupera los votos almacenados en localStorage
        const storedLikes = localStorage.getItem("likes");
        const storedDislikes = localStorage.getItem("dislikes");

        // Establece los votos almacenados en el estado
        if (storedLikes) setLikes(JSON.parse(storedLikes));
        if (storedDislikes) setDislikes(JSON.parse(storedDislikes));
    }, []);

    // Cálculo de porcentajes de votos
    const totalVotes = likes + dislikes;
    const likePercentage = totalVotes === 0 ? 0 : (likes / totalVotes) * 100;
    const dislikePercentage = totalVotes === 0 ? 0 : (dislikes / totalVotes) * 100;

    return (
        <div 
            className="bg-cover text-white p-10 w-full top-0"
            style={{
                backgroundImage: `url(${ironman})`,
                backgroundPosition: '50% 20%'
            }}
        >
            <Header /> {/* Renderiza el encabezado */}
            <Card 
                name={data[0].name} // Nombre del superhéroe
                likes={likes} // Número de "me gusta"
                dislikes={dislikes} // Número de "no me gusta"
                setLikes={setLikes} // Función para actualizar "me gusta"
                setDislikes={setDislikes} // Función para actualizar "no me gusta"
            />

            <div className="absolute left-0 w-full flex items-center justify-center mt-8">
                <div className="w-full bg-orange-500 h-10 overflow-hidden">
                    <div 
                        className="bg-green-500 h-full relative flex justify-end items-center"
                        style={{ width: `${likePercentage}%` }}                        
                    >
                        <span className="text-white font-bold px-4 ">{Math.round(likePercentage)}%</span>
                        <HandThumbUpIcon className="h-12 w-8 mr-4"/> {/* Ícono de "me gusta" */}
                    </div>
                    <div 
                        className="absolute top-0 right-0 bg-transparent h-full flex justify-start px-4 items-center"
                        style={{ width: `${dislikePercentage}%`, left: `${likePercentage}%` }}
                    >
                        <span className="text-white font-bold px-4">{Math.round(dislikePercentage)}%</span>
                        <HandThumbDownIcon className="h-12 w-8"/> {/* Ícono de "no me gusta" */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
