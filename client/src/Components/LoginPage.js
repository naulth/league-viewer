import React, { useState} from "react";
import { Link, useNavigate } from "react-router-dom";


function LoginPage({ handleLogin }) {
    

    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isIncorrect, setIsIncorrect] = useState(false);

    const toggleIncorrect = () => {
        setIsIncorrect(!isIncorrect);
    };

    function handleLoginSubmit(e) {
        e.preventDefault();

        fetch("/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ username, password }),
        }).then((r) => {
            if (r.ok) {
                r.json().then((user) => handleLogin(user));
                navigate("/profile");
            } else {
                toggleIncorrect();
            }
        });
    }

    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 pb-8 lg:px-8">
                <div className="">
                    <h2 className=" text-center text-4xl font-bold leading-9 tracking-tight text-black">
                        Welcome to
                    </h2>
                    <h1 className="mt-10 text-center text-8xl font-bold leading-9 tracking-tight text-black">
                        League Viewer
                    </h1>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-16 mb-6 text-center text-3xl font-bold leading-9 tracking-tight text-black">
                        Sign in to your account
                    </h2>
                    <form className="space-y-6" onSubmit={handleLoginSubmit}>
                        <div>
                            <div>
                                <label className="block text-md font-medium leading-6 text-black">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="username"
                                        value={username}
                                        onChange={(e) =>
                                            setUsername(e.target.value)
                                        }
                                        className="block w-full bg-gray-200 rounded-md border-0 px-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div className="py-3">
                                <label className="block text-md font-medium leading-6 text-black">
                                    Password
                                </label>
                                <div className="z-0 relative w-full">
                                    <input
                                        type="password"
                                        name="password"
                                        value={password}
                                        onChange={(e) =>
                                            setPassword(e.target.value)
                                        }
                                        className="block w-full rounded bg-gray-200 border-0 py-1.5 px-4 my-1 text-zinc-950 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <input
                                type="submit"
                                name="submit"
                                className="flex w-full justify-center bg-zinc-900 rounded-md px-3 py-1.5 text-md font-semibold leading-6 text-lime-300 shadow-sm hover:bg-lime-200 hover:text-slate-600 border border-lime-300"
                            />
                            {isIncorrect ? (
                                <div>
                                    <h2 className="block text-sm font-sm leading-6 text-black">
                                        Username or Password Invalid. Please Try
                                        Again.
                                    </h2>
                                </div>
                            ) : null}
                        </div>
                    </form>

                    <p className="mt-10 text-center text-md text-black">
                        Not a member?
                        <Link
                            to="/signup"
                            className="font-semibold text-lg leading-6 text-black"
                        >
                            Sign Up
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
