import React from "react";

const Image = () => {
    return (
        <div className="hidden md:flex col-span-3  w-full h-full object-cover rounded-lg overflow-hidden  outline-hidden ">
            <img
                className="w-full h-full object-cover outline-hidden  transation-all duration-400"
                src="/base.png"
                alt=""
            />
        </div>
    );
};

export default Image;
