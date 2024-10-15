/**
 * VoteConfirmation Component
 * 
 * Este componente muestra una confirmación al usuario después de votar
 * por un superhéroe. Incluye el nombre del superhéroe, un ícono que indica 
 * si el voto fue positivo o negativo, y un botón para volver a votar.
 * 
 * Props:
 * - `name`: Nombre del superhéroe (string).
 * - `isLike`: Indica si el voto fue positivo (boolean).
 * - `onBack`: Función que se llama al hacer clic en el botón para volver a votar (function).
 * 
 * Estructura:
 * - Nombre del superhéroe: Se muestra en un tamaño de fuente grande.
 * - Ícono de votación: Muestra un ícono verde si el voto fue positivo o un ícono naranja si fue negativo.
 * - Mensaje de confirmación: Indica que el voto ha sido registrado.
 * - Botón de retorno: Permite al usuario volver a votar.
 * 
 * Uso:
 * ```jsx
 * <VoteConfirmation 
 *   name="Iron Man" 
 *   isLike={true} 
 *   onBack={handleBack} 
 * />
 * ```
 */

import React from "react";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";

const VoteConfirmation = ({ name, isLike, onBack }) => {
    return (
        <div className="bg-black bg-opacity-30 backdrop-blur-lg shadow-lg text-white max-w-lg w-full min-h-[200px] md:min-h-[300px] lg:min-h-[400px] flex flex-col items-center justify-center p-8">
            <div className="flex flex-col items-center">
                <p className="font-bold text-4xl">{name}</p>
                {isLike ? (
                    <HandThumbUpIcon className="h-12 w-12 text-green-500 mb-4" />
                ) : (
                    <HandThumbDownIcon className="h-12 w-12 text-orange-500 mb-4" />
                )}
                <p className="text-xl font-bold">Tu voto ha sido registrado</p>
            </div>
            <button 
                className="bg-black bg-opacity-10 text-white mt-8 px-6 py-3 border-2 border-white hover:bg-opacity-20 transition duration-200"
                onClick={onBack}
            >
                Volver a votar
            </button>
        </div>
    );
}

export default VoteConfirmation;
