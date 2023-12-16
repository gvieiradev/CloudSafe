//import { useState } from "react";
import { createContext, useContext, useState } from "react";
import { uploadRequest} from "../api/upload.js";

const UploadContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useUpload = () =>{
    const context = useContext(UploadContext);
    if(!context){
        throw new Error("useUpload must be used within a UploadProvider");
    }
    return context;
}

// eslint-disable-next-line react/prop-types
export function UploadProvider({children}) {
    const [image, setImage] = useState("")

    const saveImage = async (data) =>{
        try {
            const res = await uploadRequest({data});
            console.log(res)
            setImage(res.data)
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <UploadContext.Provider value={{saveImage, image}}>
            {children}
        </UploadContext.Provider>
    )
}


