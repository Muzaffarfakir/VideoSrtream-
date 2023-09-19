import React from "react";
import { Route, Routes, BrowserRouter, Link } from "react-router-dom"
import "./Navbar.css"
import Signup from "./SignUp";
import Login from "./Login";
import { useCookies } from "react-cookie";
import AddVideo from "./AddVideo";
import Home from "./Home";
function Navbar() {
    let [cookie, setCookies] = useCookies(["access_token"]);
    function logout() {
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("id");
        setCookies("access_token", "")
    }


    return (

        <>
            <BrowserRouter>
                <nav>
                    <ul>

                        <li>
                            <Link style={{color:"white", textDecoration:"none"}} to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link style={{color:"white", textDecoration:"none"}} to={"/AddVideo"}>AddVideo</Link>
                        </li>
                        <li>
                            <Link style={{color:"white", textDecoration:"none"}}  to={"/signup"}>SignUp</Link>
                           
                        </li>
                        <li>

                            {!cookie.access_token ? (<Link style={{color:"white", textDecoration:"none"}} to={"/Login"}>Login</Link>
                            ) : (<Link style={{color:"white", textDecoration:"none"}} onClick={logout}>Logout</Link>)}
                        </li>
                    </ul>

                </nav>
                <Routes>
                    <Route
                        path={"/Signup"} element={<Signup />}
                    />
                    <Route
                        path={"/"} element={<Home />}
                    />
                    <Route
                        path={"/login"} element={<Login />}
                    />
                    <Route
                        path={"/AddVideo"} element={<AddVideo />}
                    />
                </Routes>

            </BrowserRouter>

        </>
    )

}
export default Navbar;