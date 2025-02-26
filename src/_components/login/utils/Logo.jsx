import React from "react";
let hover =
    "hover:-translate-x-1 cursor-pointer select-none transition-all duration-200";

const Logo = () => {
    return (
        <div
            className={`w-fit h-16 object-cover  absolute top-3 right-3 ${hover}`}
        >
            <img
                className=" w-full h-full object-cover outline-hidden"
                src="/logo-dark.png"
                alt=""
            />
        </div>
    );
};

export default Logo;
