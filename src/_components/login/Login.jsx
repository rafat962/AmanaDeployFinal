import React from "react";
import Logo from "./utils/Logo";
import Image from "./utils/Image";
import Inputs from "./utils/Inputs";

let hover =
    "hover:-translate-x-1 cursor-pointer select-none transition-all duration-200";

const Login = () => {
    return (
        <>
            {/* main container */}
            <div className="w-full h-full bg-[#F8FAFC] rounded-2xl p-2 relative">
                {/* logo */}
                <Logo />
                {/* items */}
                <div className="w-full h-full grid grid-cols-5 gap-2 ">
                    {/* imgage */}
                    <Image />
                    {/* inputs */}
                    <Inputs />
                </div>
            </div>
        </>
    );
};

export default Login;
