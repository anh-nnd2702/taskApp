import React, { useState } from "react";

const LoginScene = async () =>{
    const [formData, setFormData] = useState({});

    const handleChangeData = (e) =>{
        setFormData({...previusData, })
    }

    const handleSubmitLogin = async (e)=>{
        e.preventDefault();
        
    }
    return (
        
        <div>
            <form onSubmit={handleSubmitLogin(e)}>
                <div>
                    <label>Name</label>
                    <input name="userName" id="userName" type="text" required onChange={(e)}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" id="password" type="password" required></input>
                </div>
                <button type="submit">Login</button>
            </form>
        </div>

    )
}

export default LoginScene;