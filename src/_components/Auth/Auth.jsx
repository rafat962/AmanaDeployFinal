import React from "react";
import { Outlet } from "react-router";
const Auth = () => {
    return (
        <div className="w-full h-full p-4 bg-blue-400">
            <Outlet />
        </div>
    );
};

export default Auth;
