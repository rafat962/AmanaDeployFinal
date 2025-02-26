import { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createHashRouter } from "react-router-dom";

createHashRouter(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
