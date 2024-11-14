import { Link } from 'react-router-dom';

interface ButtonProps {
    to: string;
    variant: string; 
    children: React.ReactNode;
    icon?: React.ReactNode
}

export const Button: React.FC<ButtonProps> = ({ to, children, variant, icon }) => (
    <Link to={to}>
       <button className={`flex items-center p-2 rounded-lg border-0 text-white ${variant} hover:bg-cyan-700 font-medium text-bold`}>
            {icon && <span className="mr-2">{icon}</span>} {/* Render ikon jika ada */}
            {children}
        </button>
    </Link>
);
