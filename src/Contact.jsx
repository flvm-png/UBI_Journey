import React from "react";
import {useState} from "react";
import logo_dash from "./logo_dash_small.png"
import {auth} from "./firebase"
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {useNavigate} from "react-router-dom"

export const Contact = () => {

    const loginEmail= useState("");
    const loginPass = useState("");


    const navigate = useNavigate();

    const logOutFunction = async ()=>{
        try{
        const user = await signOut(auth, loginEmail, loginPass);
        navigate('/');
        console.log(user);

        }catch(error){
            alert(error.message);
        }
    }
    
    const setUser = useState({});
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
            <h2>Prof. Doutor Bruno Silva (Orientador)</h2>
            <a href="mailto:bsilva@di.ubi.pt?subject=Contact%20from%20UBI_Journey" target="_blank" rel="noreferrer">bsilva@di.ubi.pt</a>
            <h2>João</h2>
            <a href="mailto:projetomcmv@gmail.com?subject=Contact%20from%20UBI_Journey" target="_blank" rel="noreferrer">projetomcmv@gmail.com</a>
            <h2>Nuno</h2>
            <a href="mailto:aresta.bastos@ubi.pt?subject=Contact%20from%20UBI_Journey" target="_blank" rel="noreferrer">aresta.bastos@ubi.pt</a>

            </div>
            </div>
        
    )
};