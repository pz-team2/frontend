import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CardVerify } from './components/Layout/CardVerify';
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { Button } from './components/Fragments/Button';
import { useAppDispatch, useAppSelector } from './Redux/hook';
import { verify } from './Redux/features/auth/authslice';

const VerifyEmail: React.FC = () => {
    const { token } = useParams<{ token: string }>();
    const dispatch = useAppDispatch();
    const {isverified, verifyMessage} = useAppSelector((state) => state.auth)

    useEffect(() => {
        if(token){
            dispatch(verify(token))
        }
    }, [token, dispatch])

    return (
        <div>
            {isverified && (
                <CardVerify judul={verifyMessage} icons={<FcApproval size={90} />} text='Silahkan Untuk Login !!' >
                    <Button to='/user/login' variant="bg-secondary p-3"> Login </Button>
                </CardVerify>
            )}
            <CardVerify judul={verifyMessage} icons={<FcHighPriority size={90} />} text='Token Expired, Registrasi Kembali Atau Kirim Ulang Verifikasi' >
                <Button to='/user/login' variant="bg-secondary p-3"> Kirim Ulang Email </Button>
            </CardVerify>
        </div>
    );
};

export default VerifyEmail;
