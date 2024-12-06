import React from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: React.ReactNode;
  allowedRoles: string[];
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children, allowedRoles }) => {
  const role = localStorage.getItem('role'); // Ambil role dari localStorage
  console.log('Role:', role);

  if (!role || !allowedRoles.includes(role)) {
    return <Navigate to="/404" replace />;
  }
  return <>{children}</>;
};

export default PrivateRoute;
