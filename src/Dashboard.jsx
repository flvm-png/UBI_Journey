import React from "react";
import {useState} from "react";
import logo_dash from "./logo_dash_login.png"
import {auth} from "./firebase"
import {onAuthStateChanged} from 'firebase/auth'
import {useNavigate} from "react-router-dom"
import  Avatar  from "./Avatar";

export const Dashboard = () => {


    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    const navigate = useNavigate();


    const goToMap = async ()=>{
        try{
        navigate('/map');
        }catch(error){
            alert(error.message);
        }
    }

    return (
        <div>
            
            <div class="topnav">
                <img src={logo_dash} className="App-logo" alt="logo"/>
            </div>
            <h2>Escolhe aqui o teu Avatar!</h2>
            <Avatar/>
            <button className="savebtn" onClick={goToMap}>Guardar</button>

            
            

            </div>
        
    )
};