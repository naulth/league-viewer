import React, {useContext, useEffect} from "react";
import { Routes, Route } from "react-router-dom";

import NavBar from "./Components/NavBar";
import SignupPage from "./Components/SignupPage";
import LoginPage from "./Components/LoginPage";

import {UserContext} from "./Context/user"

function App() {

    const {user, setUser} = useContext(UserContext)

    function handleLogin(user) {
        setUser(user);
    }

    function handleLogout() {
        
        fetch("/logout", {
            method: "DELETE",
        }).then(
            // () => onLogout()
            setUser(null)
            
        );
        console.log('logged out')
    }

    useEffect(() => {
        fetch("/check_session").then((response) => {
            if (response.ok) {
                response.json().then((user) => setUser(user));
            } else {
                console.log(response.status)
                response.text().then(console.warn)
            }
        });
    }, [setUser]);

    return (
        <div className="App">
            <NavBar user={user} handleLogout={handleLogout} />
            <Routes>
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/login" element={<LoginPage handleLogin={handleLogin} user={user}/>} />
            </Routes>
        </div>
    );
}

export default App;
