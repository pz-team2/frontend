import React from "react";
import "./LoadingScreen.css"; 
import Logo from "./assets/img/goevent.png"

const LoadingScreen: React.FC = () => {
  return (
    <div id="loading-screen">
      <img src={Logo} alt="Loading..." id="loading-image" />
    </div>
  );
};

export default LoadingScreen;
