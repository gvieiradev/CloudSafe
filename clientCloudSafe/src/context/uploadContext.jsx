// import { useState } from "react";
import { createContext, useContext } from "react";
import { uploadRequest } from "../api/upload";

const UploadContext = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const useUpload = () =>{
    const context = useContext(UploadContext);
    if(!context) throw new Error("useUpload must be used within a UploadProvider");
    return context;
}

// eslint-disable-next-line react/prop-types
export function UploadProvider({children}){
    // const [image, setImage] = useState([]);

    const saveImages = async (image) => {
        try {
            const res = await uploadRequest(image);
            console.log(res.data)
        } catch (error) {
            console.log(error)
        }
    };

    return(
        <UploadContext.Provider value={{saveImages}}>
            {children}
        </UploadContext.Provider>
    )
}


