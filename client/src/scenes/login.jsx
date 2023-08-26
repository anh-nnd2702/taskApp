import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import {login} from "../apis/user.js";

const LoginScene = () =>{
    const [formData, setFormData] = useState({
        userName:"",
        password:""
    });
    const navigate = useNavigate();
    const [validText, setValidText] = useState("")

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmitLogin = async (e)=>{
        e.preventDefault();
        if(formData.userName===""||formData.password===""){
            setValidText("Please check your input and retry!");
        } 
        else{
            try{
                const loginner = await login(formData.userName, formData.password);
                if(loginner){
                    navigate("/");
                }
                else{
                    setValidText("Can not login, please check your input and retry!");
                }
            }
            catch(error){
                setValidText("Can not login, please check your input and retry!");
            }
        }
    }
    
    const checkLogin = ()=>{
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if(isLoggedIn){
            navigate("/");
        }
    }

    useEffect(()=>{
        checkLogin();
    },[]);

    return (
        <div>
            <form onSubmit={handleSubmitLogin}>
                <h4>{validText}</h4>
                <div>
                    <label>Name</label>
                    <input name="userName" id="userName" type="text" required onChange={handleChange}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" id="password" type="password" required onChange={handleChange}></input>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>

    )
}

export default LoginScene;