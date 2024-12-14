import api from "../../../services/api";


interface login{
    email: string,
    password: string;
}

interface register{
    username: string,
    email: string,
    password: string;
}

interface verifyResponse{
    message: string;
}

export const apiLogin = async (data: login) => {
    try{
        const respone = await api.post('auth/login', data);
        return respone.data
    }catch(erorr){
        return 'Terjadi Kesalahan'
    }
};

export const  apiRegister = async (data: register) => {
    try{
        const respone = await api.post('auth/register', data);
        return respone.data
    }catch(erorr){
        return 'Terjadi Kesalahan'
    }
}

export const verifyEmail = async (token: string): Promise<verifyResponse> =>  {
    try {
        const response = await api.get<verifyResponse>(`auth/verify/${token}`);
        return response.data;
    } catch (error) {
        return { message: 'Verification failed' };
    }
};
