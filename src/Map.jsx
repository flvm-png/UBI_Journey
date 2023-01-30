import React from "react";
import {useState} from "react";
import logo_dash_small from "./logo_dash_small.png"
import {auth} from "./firebase"
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {useNavigate} from "react-router-dom"
import Mapa from "./Mapa"



export const Map = () => {

    const loginEmail= useState("");
    const loginPass = useState("");

    var [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    const navigate = useNavigate();

    const logOutFunction = async ()=>{
        try{
        user = await signOut(auth, loginEmail, loginPass);
        navigate('/');
        console.log(user);

        }catch(error){
            alert(error.message);
        }
    }

    var x = document.getElementById("demo");

    function getLocation() {
        if (navigator.geolocation) {
          navigator.geolocation.watchPosition(showPosition);
        } else { 
          x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
          
    function showPosition(position) {
        console.log(position.coords.latitude + "; " + position.coords.longitude);
        navigate('/missions')
    }

    return (
        <div>
            
            <div class="topnav">
                <div className="alinhar">
                    <div class="dropdown">
                        <div class="dropbtn">
                        ☰
                        </div>
                        <div class="dropdown-content">
                            <a href="/map">Mapa</a>
                            <a href="/missions">Objetivos</a>
                            <a href="/info">Informações</a>
                            <a href="*">Configurações</a>
                            <a href="*">Notificações</a>
                            <a href="/ct">Contactar</a>
                        </div>
                    </div>
                </div>
                <img src={logo_dash_small} className="App-logo" alt="logo"/>
                <button className="but" onClick={logOutFunction}>Sair</button>               
            </div>
            <div>
            <Mapa/>
            </div>
            <button className="buttonn" onClick={getLocation}>Cheguei!</button>
            </div>
        
    )
};