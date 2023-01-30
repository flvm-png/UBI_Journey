import React from "react";
import {useState} from "react";
import logo_dash_small from "./logo_dash_small.png"
import {auth} from "./firebase"
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {useNavigate} from "react-router-dom"



export const QuestOne = () => {

    const loginEmail= useState("");
    const loginPass = useState("");

    var [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    const navigate = useNavigate();

    const logOutFunction = async ()=>{
        try{
        user = signOut(auth, loginEmail, loginPass);
        navigate('/');
        console.log(user);

        }catch(error){
            alert(error.message);
        }
    }
      const right = async ()=>{
        alert("Missão concluída! Acertaste.")
        localStorage.setItem("completed", "true")
        navigate('/map')
      }

      var c = 0
      const wrong = async () =>{
        c++
        c===4 ? navigate("/mapB") : alert("Errado! Tenta outra vez.")
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
            <ul class="fullclick">
                <li className="container">
                    <h3>Em que ano foi fundada a UBI?</h3>
                    <button className="buttonnn" onClick={wrong}>1983</button>
                    <button className="buttonnn" onClick={right}>1979</button>
                    <button className="buttonnn" onClick={wrong}>1980</button>
                    <button className="buttonnn" onClick={wrong}>1977</button>
                </li>
            </ul>
            <p id="answer"></p>
                
            </div>
            </div>
        
    )
};