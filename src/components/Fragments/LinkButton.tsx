import { Link } from 'react-router-dom';

interface ButtonProps {
    to: string; // Pastikan ini sesuai
    children: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ to, children }) => (
    <Link to={to}>
        <button>{children}</button>
    </Link>
);
