import React from "react";
import { Routes, Route } from "react-router-dom";

import SignupPage from "./Components/SignupPage";

function App() {
    return (
        <div className="App">
            <h1>Hello World</h1>
            <Routes>
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </div>
    );
}

export default App;
