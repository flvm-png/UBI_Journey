import React from "react";
import {useState} from "react";
import logo from './logo_dash_login.png';
import {createUserWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import {auth} from "./firebase"
import { useNavigate } from "react-router-dom";

export const Register = (props) => {

    const [regEmail, setRegEmail]= useState("");
    const [regPass, setRegPass] = useState("");

    var [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    const navigate = useNavigate();

    const registerFunction = async ()=>{
        try{
        user = await createUserWithEmailAndPassword(auth, regEmail, regPass);
        console.log(user);
        alert('Sucesso!')
        navigate('/dash')
        }catch(error){
            alert(error.message);
        }
    }

    const handleSubmit = async(e) =>{
        e.preventDefault();
    }

    return (
        <div>
            <img src={logo} className="App-logo" alt="logo"/>
        <div className="auth-form-container">
            <h3>Registo</h3>
            <form className="login-form" onSubmit={handleSubmit}>

                <label htmlFor="email">E-mail </label>
                <input type="email" placeholder="oteuemail@gmail.com" id="email" name="email" onChange={(event)=>setRegEmail(event.target.value)}/>

                <label htmlFor="name">Nome completo </label>
                <input type="text" placeholder="Nome completo" id="name" name="name"/>
                
                <label htmlFor="password">Password </label>
                <input type="password" placeholder="**********" id="password" name = "password" onChange={(event)=>setRegPass(event.target.value)}/>
                
                <button type="submit" className="buttonn" onClick={registerFunction}>Regista-te</button>
            </form>    
            <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Já tens conta? Entra aqui!</button>
        </div>
        </div>
    )
}