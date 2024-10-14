import React from "react";
import data from '../data/votes.json';

const Card = ({name, likes, dislikes, setLikes, setDislikes}) => {

    const handleLike = () => {
        const newLikes = likes + 1;
        setLikes(newLikes);
        localStorage.setItem("likes", JSON.stringify(newLikes));
    };

    const handleDislike = () => {
        const newDislikes = dislikes + 1;
        setDislikes(newDislikes);
        localStorage.setItem("dislikes", JSON.stringify(newDislikes));
    };

    const totalVotes = likes + dislikes;
    const likePercentage = totalVotes === 0 ? 0 : (likes/totalVotes) * 100;
    const dislikePercentage = totalVotes === 0 ? 0 : (dislikes/totalVotes) * 100; 

    return(
        <div className="bg-black bg-opacity-30 backdrop-blur-lg shadow-lg text-black max-w-lg w-full min-h-[200px] md:min-h-[300px] lg:min-h-[400px] flex flex-col">
            <div className="p-4 text-white text-left ml-4 mt-4 text-sm flex-grow">
                <p>Dinos tu opinion sobre</p>
                <p className="font-bold text-4xl">{name}?</p>
                <p className="mt-4 text-sm mt-12">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </div>
            <div className="mt-auto p-4">
                <p className="font-bold text-white text-left text-lg mb-4">¿Cuál es tu voto?</p>
            </div>
            <div className="flex">
                <button 
                    className="bg-green-500 text-white py-4 w-full "
                    onClick={handleLike}> Like
                </button>
                <button 
                    className="bg-orange-500 text-white w-full "
                    onClick={handleDislike}> Dislike 
                </button>
            </div>
        </div>
    )

}

export default Card;