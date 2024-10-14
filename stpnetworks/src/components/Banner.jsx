import React from "react";
import Header from "./Header";
import Card from "./Card";

const Banner = () => {
    return (
        <div className="bg-slate-400 text-white p-10 h-screen fixed w-full flex flex-col ">
            <Header />
            <div className="flex-grow flex items-center justify-cenetr">
                <Card />
            </div>
            <p className="text-xl">Este es el banner</p>
        </div>
    );
}

export default Banner;
