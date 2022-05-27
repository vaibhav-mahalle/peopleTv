import { createContext, useContext, useReducer } from "react";
import authReducer from "./reducer";


const AuthContext = createContext(null);
const initialValue = { isLoggedIn: false };
const AuthProvider = ({ children }) => {
  const [authState, authDispatch] = useReducer(authReducer, initialValue);

  return (
    <AuthContext.Provider value={{ authState, authDispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => useContext(AuthContext);

export { useAuth, AuthProvider };
