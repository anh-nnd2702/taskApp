import Cookies from 'js-cookie';
import axios from 'axios';
import DOMAIN from "../config.js";

export const getAllTask = async ()=>{
    try{
        const token = Cookies.get('token');

        const result = await axios.get(`${DOMAIN}/task`,{
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'multipart/form-data',
              },
        });

        if(result.status===200){
            return result.data.taskList;
        }
        else{
            throw new Error("cannot get tasks")
        }
    }
    catch(error){
        throw error;
    }
}
