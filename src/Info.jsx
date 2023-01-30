import React from "react";
import {useState} from "react";
import logo_dash from "./logo_dash_small.png"
import {auth} from "./firebase"
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {useNavigate} from "react-router-dom"

export const Info = () => {

    const loginEmail= useState("");
    const loginPass = useState("");


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
    
    var [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })


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
                <img src={logo_dash} className="App-logo" alt="logo"/>
                <button className="but" onClick={logOutFunction}>Sair</button>                
            </div>
            <div>
            <h2>Projeto final da Licenciatura em Engenharia Informática</h2>

            </div>
            </div>
        
    )
};