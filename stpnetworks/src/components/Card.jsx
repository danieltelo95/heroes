import React, {useState, useEffect} from "react";
import data from '../data/votes.json'

const Card = () => {

    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);

    useEffect(() => {

            setLikes(data.likes);
            setDislikes(data.dislikes);

            const storedLikes = localStorage.getItem("likes");
            const storedDislikes = localStorage.getItem("dislikes");

            if(storedLikes) setLikes(JSON.parse(storedLikes));
            if(storedDislikes) setDislikes(JSON.parse(storedDislikes))
    }, []);

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
        <div>
            <div>
                <button onClick={handleLike}> Like</button>
                <button onClick={handleDislike}> Dislike </button>
            </div>
            <div className="text-xl">
                <p>Votos totales: {totalVotes}</p>
                <p>% Likes: {likePercentage}</p>
                <p>% Dislikes: {dislikePercentage}</p>
            </div>

            {totalVotes > 0 && (
                <p>Tu voto ha sido registrado</p>
            )}
        </div>
    )

}

export default Card;