import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CardVerify } from './components/Layout/CardVerify';
import { FcApproval } from "react-icons/fc";
import { FcHighPriority } from "react-icons/fc";
import { Button } from './components/Fragments/Button';
import api from './services/api';

interface VerifyEmailResponse {
    message: string;
}

const VerifyEmail: React.FC = () => {
    const { token } = useParams<{ token: string }>();
    const [message, setMessage] = useState<string>('');
    const [verified, setVerified] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true); // Status loading

    const verifyEmail = async () => {
        if (!token) return;

        try {
            const response = await api.get<VerifyEmailResponse>(`auth/verify/${token}`);
            setMessage(response.data.message);
            setVerified(true);
        } catch (error: any) {
            setMessage(error.response?.data?.message || 'Verification failed');
            setVerified(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        verifyEmail();
    }, [token]);

    if (loading) {
        return (
            <div className='flex justify-center mt-20'>
                <span className="loading loading-spinner text-info "></span>;
            </div>
        )
    }

    return (
        <div>
            {verified && (
                <CardVerify judul={message} icons={<FcApproval size={90} />} text='Silahkan Untuk Login !!' >
                    <Button to='/user/login' variant="bg-secondary p-3"> Login </Button>
                </CardVerify>
            )}
            <CardVerify judul={message} icons={<FcHighPriority size={90} />} text='Token Expired, Registrasi Kembali Atau Kirim Ulang Verifikasi' >
                <Button to='/user/login' variant="bg-secondary p-3"> Kirim Ulang Email </Button>
            </CardVerify>
        </div>
    );
};

export default VerifyEmail;
