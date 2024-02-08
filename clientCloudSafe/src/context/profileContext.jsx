import {createContext, useContext, useState} from "react";
import { getUserRequest } from "../api/profile";

export const ProfileContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useProfile = () =>{
    const context = useContext(ProfileContext);
    if(!context){
        throw new Error("useAuth must be used within an Authprovider")
    }
    return context;
};

// eslint-disable-next-line react/prop-types
export function ProfileProvider({children}){
    const [userData, setuserData]= useState("");

    const getuserData = async()=>{
        try {
            const res = await getUserRequest();
            setuserData(res.data);
            console.log("res ",res.data)
        } catch (error) {
            console.log(error)
        }
    }

    return(
        <ProfileContext.Provider value={{getuserData, userData}}>
            {children}
        </ProfileContext.Provider>
    )
}