import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadingUserInfo, setLoadingUserInfo] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.post('/api/webapi/GetUserInfo');
        const userInfo = response.data.data;
        console.log(userInfo);
        setUserInfo(userInfo);
        setIsAuthenticated(true);
      } catch (error) {
        setIsAuthenticated(false);
        console.error('Error fetching user info:', error);
      } finally {
        setLoadingUserInfo(false);
      }
    };

    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loadingUserInfo,
        userInfo,
        setIsAuthenticated,
        setUserInfo,
        setLoadingUserInfo
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
