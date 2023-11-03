import {createContext, useState, useContext} from "react";
import { registerRequest, loginRequest, logoutRequest, verifyTokenRequest } from "../api/auth.js";
import { useEffect } from "react";
import Cookies from "js-cookie";

export const AuthContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () =>{
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within an Authprovider")
    }
    return context;
};

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({children}) =>{
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(true);

    const signup = async (user) =>{
        try {
            const res = await registerRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            setErrors(error.response.data)
        }
    };

    const signin = async (user) => {
        try {
            const res = await loginRequest(user);
            setUser(res.data);
            setIsAuthenticated(true);
        } catch (error) {
            if(Array.isArray(error.response.data)){
                return setErrors(error.response.data);
            }
            setErrors([error.response.data.message])
        }
    };

    const closeSession = async () =>{
        try {
            const res = await logoutRequest();
            if(res.status === 200) setIsAuthenticated(false)
        } catch (error) {
            setErrors(error)
        }
    };

    useEffect(() => {
        if(errors.length > 0){
            const timer = setTimeout(() => {
                setErrors([])
            },5000)
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get();

            if (!cookies.token){
                setIsAuthenticated(false);
                setLoading(false)
                return setUser(null);
            }

            try {
                const res = await verifyTokenRequest(cookies.token);
                if (!res.data){
                    setIsAuthenticated(false);
                    setLoading(false);
                    return;
                }

                setIsAuthenticated(true);
                setUser(res.data);
                setLoading(false);
            } catch (error) {
                setIsAuthenticated(false);
                setUser(null);
            }
        }
        checkLogin();
    }, []);

    return(
        <AuthContext.Provider value={{signup, signin, closeSession, user, isAuthenticated, errors, loading}}>
            {children}
        </AuthContext.Provider>
    )
}