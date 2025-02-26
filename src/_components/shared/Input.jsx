import React from "react";

const Input = ({ type, placeholder, handleState, error, value }) => {
    return (
        <div className="w-full">
            <input
                value={value}
                onChange={(e) => handleState(e.target.value)}
                type={type}
                class={`placeholder:p-1 text-end bg-gray-50 border  text-sm rounded-lg  block w-full p-4  placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500 ${
                    error ? "border-red-500" : "border-gray-300"
                }`}
                placeholder={placeholder}
                required
            />
        </div>
    );
};

export default Input;
