import React from "react"
import {useNavigate} from "react-router-dom"

export const Undef = () =>{

    const navigate = useNavigate();

    const voltar = async ()=>{
        try{
        navigate('/map');
        }catch(error){
            alert(error.message);
        }
    }

    return (
        <div>
            <p>Not defined</p>
            <button className="but" onClick={voltar}>Voltar</button>
        </div>
    )
}