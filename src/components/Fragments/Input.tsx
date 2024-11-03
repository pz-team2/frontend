import React from 'react'

interface InputProps {
    label: string;
    type: string;
    title : string;
    variant: string;
    name: string;
}

export const Input:React.FC<InputProps> = ({label, type, title, variant, name}) => {
    return (
        <div className='mt-3'>
            <span className="mt-6 mb-2">{label}</span>
            <input type={type} placeholder={title} name={name} className={`input input-bordered w-full mt-2 ${variant}  border-0`}/>
        </div>
    )
}
