import React from 'react'
interface verifyProps {
    judul:React.ReactNode;
    icons: React.ReactNode;
    text: string;
    children: React.ReactNode;
}

export const CardVerify:React.FC<verifyProps> = ({judul, icons, text, children}) => {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <div className="card shadow-lg bg-slate-100 w-96 h-96 p-5">
                <h1 className="text-center text-xl mt-5 font-bold text-black"> {judul}</h1>
                <div className="mt-8 flex justify-center">
                    {icons}
                </div>
                <h2 className="text-center mt-8">{text} </h2>
                <div className="flex justify-center mt-7">
                   {children} 
                </div>
            </div>
        </div>
    )
}
