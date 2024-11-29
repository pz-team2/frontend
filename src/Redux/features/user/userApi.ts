import api from "../../../services/api"

export const  getUserApi = async() => {

    try {
        const respon = await api.get('users/');
        return respon.data;
    }catch(error){
        return error;
    }

}