import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from './Auth/AuthContext';

const ProtectedRoute = () => {
  const { isAuthenticated, loadingUserInfo } = useContext(AuthContext);

  if (loadingUserInfo) {
    return <p>Loading user info...</p>;
  }

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
