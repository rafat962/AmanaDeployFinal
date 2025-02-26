import React, { useState } from "react";
import Input from "../shared/Input";

const Otp = () => {
    const [otp, setOtp] = useState();
    let PasswordError = false;
    return (
        <div className="w-full h-full bg-[#F8FAFC] rounded-2xl p-2 relative flex items-center justify-center">
            <div className="flex flex-col items-center justify-center space-y-4 w-80">
                <h1 className="text-2xl">Otp</h1>
                <Input
                    type="number"
                    placeholder="OTP"
                    handleState={setOtp}
                    error={PasswordError}
                    value={otp}
                />
                <button className="hover:-translate-y-1 hover:shadow-xl  transition-all duration-300  mt-2 cursor-pointer w-full text-white text-lg font-bold bg-blue-400 p-3 rounded-xl">
                    إرسال
                </button>
            </div>
        </div>
    );
};

export default Otp;
