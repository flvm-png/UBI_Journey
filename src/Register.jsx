import React from "react";
import {useState} from "react";
import logo from './logo.png';
import {createUserWithEmailAndPassword, onAuthStateChanged, signOut} from 'firebase/auth'
import {auth} from "./firebase"

export const Register = (props) => {

    const [regEmail, setRegEmail]= useState("");
    const [regPass, setRegPass] = useState("");

    const [setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })

    const registerFunction = async ()=>{
        try{
        const user = await createUserWithEmailAndPassword(auth, regEmail, regPass);
        console.log(user);
        signOut(auth);
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
            <h3>Register</h3>
            <form className="login-form" onSubmit={handleSubmit}>

                <label htmlFor="email">E-mail </label>
                <input type="email" placeholder="youremail@gmail.com" id="email" name="email" onChange={(event)=>setRegEmail(event.target.value)}/>

                <label htmlFor="name">Full Name </label>
                <input type="text" placeholder="Full name" id="name" name="name"/>
                
                <label htmlFor="password">Password </label>
                <input type="password" placeholder="**********" id="password" name = "password" onChange={(event)=>setRegPass(event.target.value)}/>
                
                <button type="submit" onClick={registerFunction}>Register</button>
            </form>    
            <button className="link-btn" onClick={()=>props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>
        </div>
    )
}