import React, { useState, useEffect } from "react";
import Header from "./Header";
import Card from "./Card";
import data from '../data/votes.json';
import ironman from '../assets/images/iron_man.jpg';
import { HandThumbUpIcon } from "@heroicons/react/24/solid";
import { HandThumbDownIcon } from "@heroicons/react/24/solid";

const Banner = () => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {
        setLikes(data[0].likes);
        setDislikes(data[0].dislikes);

        const storedLikes = localStorage.getItem("likes");
        const storedDislikes = localStorage.getItem("dislikes");

        if (storedLikes) setLikes(JSON.parse(storedLikes));
        if (storedDislikes) setDislikes(JSON.parse(storedDislikes));
    }, []);

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
            <Header />
            <Card 
                name={data[0].name}
                likes={likes} 
                dislikes={dislikes} 
                setLikes={setLikes} 
                setDislikes={setDislikes}
            />

            <div className="absolute left-0 w-full flex items-center justify-center mt-8">
                <div className="w-full bg-orange-500 h-10 overflow-hidden">
                    <div 
                        className="bg-green-500 h-full relative flex justify-end items-center"
                        style={{ width: `${likePercentage}%` }}                        
                    >
                        <span className="text-white font-bold px-4 ">{Math.round(likePercentage)}%</span>
                        <HandThumbUpIcon className="h-12 w-8 mr-4"/>
                    </div>
                    <div 
                        className="absolute top-0 right-0 bg-transparent h-full flex justify-start px-4 items-center"
                        style={{ width: `${dislikePercentage}%`, left: `${likePercentage}%` }}
                    >
                        <span className="text-white font-bold px-4">{Math.round(dislikePercentage)}%</span>
                        <HandThumbDownIcon className="h-12 w-8"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
