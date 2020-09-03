import React, {useState,useEffect} from "react";
import "./App.css";
import Login from "./components/Login/Login";
import {getTokenFromUrl} from "./components/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player/Player";
import {useDataLayerValue} from "./components/DataLayer";

const spotify =  new SpotifyWebApi ();

const App = () =>{
    const [token, setToken] = useState(null);
    const [{user}, dispatch] = useDataLayerValue();

    useEffect(() => {
        const hash = getTokenFromUrl();
        window.location.hash = "";
        const _token = hash.access_token;

        if(_token){
            setToken(_token);
            spotify.setAccessToken(_token);

            spotify.getMe().then((user) =>{
                dispatch({
                    type: 'SET_USER',
                    user:user,
                })
            });
        }
    }, []);

    return(
        <div className="app">
            {
                token ? (
                    <Player/>
                ) : (
                    <Login/>
                )
            }
        </div>
    )
}

export default App;