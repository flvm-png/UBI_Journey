import React from "react";
import {useState} from "react";
import logo from './logo_dash_login.png';
import {auth} from "./firebase"
import {signInWithEmailAndPassword/*, onAuthStateChanged*/} from 'firebase/auth'
import {useNavigate} from "react-router-dom"

export const Login = (props) => {

    const [loginEmail, setLoginEmail]= useState("");
    const [loginPass, setLoginPass] = useState("");

    const navigate = useNavigate();

    const loginFunction = async ()=>{
        try{
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPass);
        console.log(user);
        localStorage.setItem("isAuth", true);
        navigate('/map');

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
            <h3>Login</h3>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">E-mail </label>
                <input type="email" placeholder="oteuemail@gmail.com" id="email" name="email" onChange={(event)=>setLoginEmail(event.target.value)}/>
                <label htmlFor="password">Password </label>
                <input type="password" placeholder="**********" id="password" name = "password" onChange={(event)=>setLoginPass(event.target.value)}/>
                <button type="submit" className="buttonn" onClick={loginFunction}>Log In</button>
            </form>   
            <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Ainda não criaste conta? Regista-te aqui!</button>
        </div>
        </div>
    )
}