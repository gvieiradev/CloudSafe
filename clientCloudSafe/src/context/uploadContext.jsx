import { createContext, useContext, useState } from "react";
import { uploadRequest} from "../api/upload.js";
import Swal from 'sweetalert2'

export const UploadContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useUpload = () =>{
    const context = useContext(UploadContext);
    if(!context){
        throw new Error("useUpload must be used within a UploadProvider");
    }
    return context;
}

// eslint-disable-next-line react/prop-types
export const UploadProvider = ({children}) =>{
    const [image, setImage] = useState("");

    const saveImage = async (data) =>{
        try {
            const res = await uploadRequest({data});
            setImage(res.data)
            Swal.fire({
                position: "top",
                icon: "success",
                title: "File uploaded successfully",
                showConfirmButton: false,
                timer: 2500
              });
        } catch (error) {
            Swal.fire({
                position: "top",
                icon: "error",
                title: "Oops...",
                text: "Something went wrong!",
                showConfirmButton: false,
                timer: 2500
              });
            console.log(error)
        }
    };

    return(
        <UploadContext.Provider value={{saveImage, image}}>
            {children}
        </UploadContext.Provider>
    )
}


