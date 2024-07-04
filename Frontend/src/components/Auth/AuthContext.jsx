// import { createContext, useState, useEffect } from 'react';
// import axios from 'axios';

// const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [isAuthenticated, setIsAuthenticated] = useState(undefined); // Initialize as undefined
//   const [loadingUserInfo, setLoadingUserInfo] = useState(true);
//   const [userInfo, setUserInfo] = useState(null);

//   useEffect(() => {
//     const checkAuth = async () => {
//       try {
//         const response = await axios.post('/api/webapi/GetUserInfo');
//         const userInfo = response.data.data;

//         // If userInfo is valid, set as authenticated
//         if (userInfo) {
//           setUserInfo(userInfo);
//           setIsAuthenticated(true);
//         } else {
//           setIsAuthenticated(false);
//         }
//       } catch (error) {
//         setIsAuthenticated(false);
//         console.error('Error fetching user info:', error);
//       } finally {
//         setLoadingUserInfo(false);
//       }
//     };

//     checkAuth();
//   }, []);

//   return (
//     <AuthContext.Provider
//       value={{
//         isAuthenticated,
//         loadingUserInfo,
//         userInfo,
//         setIsAuthenticated,
//         setUserInfo,
//         setLoadingUserInfo
//       }}
//     >
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContext;

// AuthProvider.js

import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(undefined);
  const [loadingUserInfo, setLoadingUserInfo] = useState(true);
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.post('/api/webapi/GetUserInfo');
        const userInfo = response.data.data;

        if (userInfo) {
          setUserInfo(userInfo);
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        setIsAuthenticated(false);
        console.error('Error fetching user info:', error);
      } finally {
        setLoadingUserInfo(false);
      }
    };

    checkAuth();
  }, []);

  const login = async (formData) => {
    try {
      const response = await fetch('/api/webapi/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.status === false) {
        throw new Error(data.message);
      }

      // Update authentication state and fetch user info
      setIsAuthenticated(true);
      setUserInfo(data.userInfo); // Assuming your API response includes userInfo
      return { success: true, msg: data.popup };

    } catch (error) {
      setIsAuthenticated(false);
      console.error('There was a problem with the login operation:', error);
      throw error; // Propagate the error for handling in your login component
    }
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        loadingUserInfo,
        userInfo,
        login,
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

