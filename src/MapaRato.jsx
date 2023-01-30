import Maps from "react-maps-suite";
import React from "react";
import {useState} from "react";
import logo_dash_small from "./logo_dash_small.png"
import {auth} from "./firebase"
import {onAuthStateChanged, signOut} from 'firebase/auth'
import {useNavigate} from "react-router-dom"




function MapaRato() {
    const defaultCenter = {
        lat: 40.27730524928067,
        lng: -7.5104835662469
         
      };
      
      const defaultZoom = 19;
      
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
            <h2>Missão Rotunda do Rato</h2>
            <Maps
            provider="google"
            defaultCenter={defaultCenter}
            defaultZoom={defaultZoom}
            />
            <button className="buttonn">Missão</button> 
            </div>
    </div>
  );
}

export default MapaRato;