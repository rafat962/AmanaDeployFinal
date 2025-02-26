import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
let hover =
    "hover:-translate-x-1 cursor-pointer select-none transition-all duration-200";
import toast, { Toaster } from "react-hot-toast";
import Input from "../../shared/Input";
const Inputs = () => {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [NameError, setNameError] = useState(false);
    const [PasswordError, setPasswordError] = useState(false);
    const notify = () => toast.error("من فضلك ادخل البيانات");
    const done = () => toast.success("تم ارسال OTP");

    const navigate = useNavigate();
    function handleName() {
        if (name?.length < 4) {
            setNameError(true);
        } else {
            setNameError(false);
        }
    }
    function handlePassword() {
        if (password?.length < 4) {
            setPasswordError(true);
        } else {
            setPasswordError(false);
        }
    }
    function checkCredintials() {
        if (name?.length < 4 || password?.length < 4) {
            notify();
            return false;
        }
        return true;
    }
    function SendData() {
        handleName();
        handlePassword();
        if (checkCredintials()) {
            done();
            setTimeout(() => {
                navigate("/otp");
            }, 600);
        }
    }
    return (
        <div className="col-span-5 md:col-span-2 flex flex-col items-center md:items-end justify-start space-y-10 py-36 px-6 md:px-10">
            <h1
                className={`text-2xl md:text-4xl font-bold text-blue-800 text-center md:text-right md:tracking-wide leading-10 md:leading-12 ${hover}`}
            >
                تسجيل الدخول الى منصة <br /> وكالة الإستثمار-
            </h1>
            <div className="flex flex-col items-end justify-start w-full space-y-4 ">
                {/* UserName */}
                <div className="w-full">
                    <Input
                        type="text"
                        placeholder="اسم المستخدم"
                        handleState={setName}
                        error={NameError}
                        value={name}
                    />
                </div>
                {/* Password */}
                <div className="w-full">
                    <Input
                        type="password"
                        placeholder="كلمة المرور"
                        handleState={setPassword}
                        error={PasswordError}
                        value={password}
                    />
                </div>
                {/* submit */}
                <button
                    onClick={() => SendData()}
                    className="hover:-translate-y-1 hover:shadow-xl  transition-all duration-300  mt-6 cursor-pointer w-full text-white text-lg font-bold bg-blue-400 p-3 rounded-xl"
                >
                    تسجيل الدخول
                </button>
                <Toaster />
            </div>
        </div>
    );
};

export default Inputs;
