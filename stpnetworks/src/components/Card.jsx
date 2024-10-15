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
            <div className="flex mt-auto">
                <button 
                    className="bg-green-500 text-white py-4 w-full flex justify-center items-center"
                    onClick={handleLike}
                > 
                    <HandThumbUpIcon className="h-6 w-6 mr-2"/> 
                </button>
                <button 
                    className="bg-orange-500 text-white py-4 w-full flex justify-center items-center"
                    onClick={handleDislike}
                >  
                    <HandThumbDownIcon className="h-6 w-6 mr-2"/>  
                </button>
            </div>
        </div>
    );
}

export default Card;
