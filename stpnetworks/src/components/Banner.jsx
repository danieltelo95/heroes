import React from "react";
import Header from "./Header";
import Card from "./Card";

const Banner = () => {
    return (
        <div className="bg-slate-400 text-white p-10 h-screen fixed w-full flex items-center">
            <Header />
            <Card />
            <p className="text-xl">Este es el banner</p>
        </div>
    );
}

export default Banner;
