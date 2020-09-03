import React from "react";
import "./Login.css";
import logo from "../../img/SpotifyLogo.png";
import { loginUrl } from "../spotify";

const Login = () =>{
    return(
        <div className="login">
            <img
               className="login__image"
               src={logo}
               alt="spotify_logo"
            />

            <a href={loginUrl}>LOGIN WITH SPOTIFY</a>

        </div>
    )
}

export default Login;