import Cookies from 'js-cookie';
import axios from 'axios';
import DOMAIN from "../config.js";

export const login = async (userName, password) =>{
    try{
        console.log(userName, password);
        const response = await axios.post(`${DOMAIN}/user/login`, {
            userName,
            password
        });

        const {token} = response.data;
        if(response.status ===200){
            console.log(response);
            Cookies.set('token', token, {expires: 365, secure: true});
            localStorage.setItem('isLoggedIn', true);
        }
        else{
            
            throw new Error("cannot login")
        }
        return true;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}