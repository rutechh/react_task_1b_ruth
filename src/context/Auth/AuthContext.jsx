import React, { useReducer, useState } from "react";
import MkdSDK from "Utils/MkdSDK";

const initialState = {
  isAuthenticated: false,
  user: null,
  token: null,
  role: null,
};

export const AuthContext = React.createContext(initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      //TODO
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        token: action.payload.token,
        role: action.payload.role,
      };
    case "LOGOUT":
      localStorage.clear();
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        token: null,
        role: null,
      };
    default:
      return state;
  }
};

let sdk = new MkdSDK();

export const tokenExpireError = (dispatch, errorMessage) => {
  const role = localStorage.getItem("role");
  if (errorMessage === "TOKEN_EXPIRED") {
    dispatch({
      type: "LOGOUT",
    });
    window.location.href = `/${role?? "admin"}/login`;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(true);
  const location = window.location.href;

  const checkToken = async () =>{
    setLoading(true);
    const sdk = new MkdSDK();
    try {
      const role = localStorage.getItem("role");
      const user = localStorage.getItem("user");
      const token = localStorage.getItem("token");
      const result = await sdk.check(role);
      console.log('Result >>', result)
      dispatch({
        type: "LOGIN", 
        payload:{token, user, role}})
    } catch (error) {
      const message = error?.message??error.message;
      tokenExpireError(dispatch, message);
      tokenExpireError(dispatch, "TOKEN_EXPIRED");
    }finally {
      setLoading(false);
    }
  }

  React.useEffect(() => {
    //TODO
    const token = localStorage.getItem("token");
    if(token) {
      return checkToken()
    }
    
    if (!location.includes('login')) {
      setLoading(false)
      return tokenExpireError(dispatch, "TOKEN_EXPIRED")
      }
    
      if (location.includes('login')) {
        setLoading(false)    
        }
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <AuthContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
