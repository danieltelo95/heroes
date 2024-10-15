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
                className="bg-black bg-opacity-10 text-white mt-8 px-6 py-3 border-2 border-white"
                onClick={onBack}
            >
                Volver a votar
            </button>
        </div>
    );
}

export default VoteConfirmation;
