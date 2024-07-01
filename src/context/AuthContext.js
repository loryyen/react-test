import { createContext } from "react";
import { useState } from "react";

const authParams = {
  isLogged: false,
  Login: () => {},
  Logout: () => {},
  userInfo: {},
};

const AuthContext = createContext(authParams);

const AuthProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userInfo, setUserInfo] = useState({ userName: "", password: "" });

  const handleLogin = ({ userName, password }) => {
    setIsLogged(true);
    setUserInfo({ userName, password });
  };
  const handleLogout = () => {
    setIsLogged(false);
    setUserInfo({ userName: "", password: "" });
  };

  return (
    <AuthContext.Provider
      value={{ isLogged, Login: handleLogin, Logout: handleLogout, userInfo }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
