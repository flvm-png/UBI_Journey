import React from "react";
import {useState} from "react";
import logo from './logo.png';
import {auth} from "./firebase"
import {signInWithEmailAndPassword, onAuthStateChanged} from 'firebase/auth'
import { stringify } from "@firebase/util";

export const Login = (props) => {

    const [loginEmail, setLoginEmail]= useState("");
    const [loginPass, setLoginPass] = useState("");

    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const loginFunction = async ()=>{
        try{
        const user = await signInWithEmailAndPassword(auth, loginEmail, loginPass);
        alert(stringify(user));
        console.log(user);
        }catch(error){
            alert('lmao '+error.message);
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
                <input type="email" placeholder="youremail@gmail.com" id="email" name="email" onChange={(event)=>setLoginEmail(event.target.value)}/>
                <label htmlFor="password">Password </label>
                <input type="password" placeholder="**********" id="password" name = "password" onChange={(event)=>setLoginPass(event.target.value)}/>
                <button type="submit" onClick={loginFunction}>Log In</button>
            </form>   
            <h4>logged in:</h4>
            {user?.email} 
            <button className="link-btn" onClick={()=>props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
        </div>
    )
}