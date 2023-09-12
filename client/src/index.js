import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { UserProvider } from "./Context/user";
import { ChampionsArrayProvider } from "./Context/championsArray";

const root = createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <ChampionsArrayProvider>
            <UserProvider>
                <App />
            </UserProvider>
        </ChampionsArrayProvider>
    </BrowserRouter>
);
