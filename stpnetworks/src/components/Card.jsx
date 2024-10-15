/**
 * Card Component
 * 
 * Este componente representa una tarjeta que muestra información sobre un superhéroe,
 * incluyendo su nombre y botones para votar (me gusta / no me gusta). 
 * Al votar, el componente actualiza los contadores de votos y muestra una confirmación 
 * de la acción realizada. Utiliza almacenamiento local para persistir los votos.
 * 
 * Props:
 * - `name`: Nombre del superhéroe (string).
 * - `likes`: Número de votos positivos (number).
 * - `dislikes`: Número de votos negativos (number).
 * - `setLikes`: Función para actualizar el contador de "me gusta" (function).
 * - `setDislikes`: Función para actualizar el contador de "no me gusta" (function).
 * 
 * Estructura:
 * - Mensaje de opinión: Instrucción para que el usuario vote.
 * - Nombre del superhéroe: Se muestra en un tamaño de fuente grande.
 * - Descripción del superhéroe: Texto descriptivo.
 * - Botones de votación: Botones para votar, que al ser clicados actualizan el conteo de votos.
 * - Componente de confirmación: Muestra un mensaje de confirmación al usuario después de votar.
 * 
 * Uso:
 * ```jsx
 * <Card 
 *   name="Iron Man" 
 *   likes={likes} 
 *   dislikes={dislikes} 
 *   setLikes={setLikes} 
 *   setDislikes={setDislikes} 
 * />
 * ```
 */

import React, { useState } from "react";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import VoteConfirmation from './VoteConfirmation'; // Importa el nuevo componente

const Card = ({ name, likes, dislikes, setLikes, setDislikes }) => {
    const [hasVoted, setHasVoted] = useState(false);
    const [isLike, setIsLike] = useState(null);

    const handleLike = () => {
        const newLikes = likes + 1;
        setLikes(newLikes);
        localStorage.setItem("likes", JSON.stringify(newLikes));
        setIsLike(true);
        setHasVoted(true);
    };

    const handleDislike = () => {
        const newDislikes = dislikes + 1;
        setDislikes(newDislikes);
        localStorage.setItem("dislikes", JSON.stringify(newDislikes));
        setIsLike(false);
        setHasVoted(true);
    };

    const handleBack = () => {
        setHasVoted(false);
    };

    if (hasVoted) {
        return <VoteConfirmation name={name} isLike={isLike} onBack={handleBack} />;
    }

    return (
        <div className="bg-black bg-opacity-30 backdrop-blur-lg shadow-lg text-black max-w-lg w-full min-h-[200px] md:min-h-[300px] lg:min-h-[400px] flex flex-col">
            <div className="p-4 text-white text-left ml-4 mt-4 text-sm">
                <p>Dinos tu opinión sobre el héroe</p>
                <p className="font-bold text-4xl">{name}</p>
                <p className="mt-4 text-sm mt-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p className="font-bold text-white mt-8 text-lg">¿Cuál es tu voto?</p>
            </div>
            <div className="flex flex-col md:flex-row mt-auto">
                <button 
                    className="bg-green-500 text-white py-4 flex justify-center items-center md:w-1/2"
                    onClick={handleLike}
                > 
                    <HandThumbUpIcon className="h-6 w-6 mr-2"/> 
                    Me gusta
                </button>
                <button 
                    className="bg-orange-500 text-white py-4 flex justify-center items-center md:w-1/2 mt-2 md:mt-0"
                    onClick={handleDislike}
                >  
                    <HandThumbDownIcon className="h-6 w-6 mr-2"/>  
                    No me gusta
                </button>
            </div>
        </div>
    );
}

export default Card;
