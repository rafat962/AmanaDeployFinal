import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./_components/login/Login";
import Otp from "./_components/Otp/Otp";
import Auth from "./_components/Auth/Auth";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Auth />}>
                    <Route path="" element={<Login />} />
                    <Route path="otp" element={<Otp />} />
                </Route>
                <Route path="*" element={<Auth />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
