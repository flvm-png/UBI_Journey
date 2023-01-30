import React from "react";
import {useState} from "react";
import logo_dash_small from "./logo_dash_small.png"
import {auth} from "./firebase"
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {useNavigate} from "react-router-dom"



export const Missions = () => {

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

      const mapB = async ()=>{
        navigate('/mapB')
      }

      const mapA = async ()=>{
        navigate('/mapA')
      }

      const mapG = async ()=>{
        navigate('/mapG')
      }

      const mapR = async ()=>{
        navigate('/mapR')
      }
      var completed
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
                    <h2>Biblioteca da UBI</h2>
                    <button className="link-btn" onClick={mapB}>
                    Completa esta missão!
                    </button>
                </li>
                <li className="container">
                    <h2>Avião das Engenharias</h2>
                    <button className="link-btn" onClick={mapA}>
                    Completa esta missão!
                    </button>
                    
                </li>
                <li className="container">
                    <h2>Rotunda do Rato</h2>
                    <button className="link-btn" onClick={mapR}>
                    Completa esta missão!
                    </button>
                </li>
                <li className="container">
                    <h2>Jardim do Goldra</h2>
                    <button className="link-btn" onClick={mapG}>
                    Completa esta missão!
                    </button>
                </li>
            </ul>
                
            </div>
            </div>
        
    )
};