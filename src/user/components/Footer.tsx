import React from "react";
import logo from "../../assets/img/goevent-w.png";
import { Link } from "react-router-dom";



const Footer: React.FC = () => {
  return (
    <footer className="footer footer-center bg-primary text-base-content p-4 mt-6">
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          <img src={logo} alt="Logo" className="h-10" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
