import React from "react";
import {useState} from "react";
import logo from './logo.png';
import {auth} from "./firebase"
import {signOut, onAuthStateChanged} from 'firebase/auth'
import {useNavigate} from "react-router-dom"

export const Dashboard = () => {

    const loginEmail= useState("");
    const loginPass = useState("");

    const [user, setUser] = useState({});
    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    })
    const navigate = useNavigate();
    const loginFunction = async ()=>{
        try{
        const user = await signOut(auth, loginEmail, loginPass);
        navigate('/');
        console.log(user);

        }catch(error){
            alert('lmao '+error.message);
        }
    }

    return (
        <div>
        <img src={logo} className="App-logo" alt="logo"/>
        <h2>Welcome to your Dashboard</h2>
            <button type="submit" onClick={loginFunction}>Log Out</button>   
            <h4>logged in:</h4>
            {user?.email}
        </div>
    )
};