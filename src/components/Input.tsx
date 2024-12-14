import React from 'react';

interface InputProps {
    label: string;
    type: string;
    title: string;
    variant: string;
    name: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    inputMode?: "email" | "search" | "tel" | "text" | "url" | "none" | "numeric" | "decimal"; 
    pattern?: string;  
}

export const Input: React.FC<InputProps> = ({
    label,
    type,
    title,
    variant,
    name,
    value,
    onChange,
    inputMode,
    pattern
}) => {
    return (
        <div className='mt-3'>
            <span className="mt-6 mb-2">{label}</span>
            <input
                type={type}
                placeholder={title}
                value={value}
                onChange={onChange}
                name={name}
                className={`input input-bordered w-full mt-2 ${variant} border-0`}
                inputMode={inputMode}  
                pattern={pattern}      
            />
        </div>
    );
};
