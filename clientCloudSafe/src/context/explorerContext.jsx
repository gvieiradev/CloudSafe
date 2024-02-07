import { createContext, useContext, useState } from "react";
import { searchImages, removeImages } from "../api/explorer.js";
import Swal from 'sweetalert2'

export const ExplorerContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useExplorer = () => {
    const context = useContext(ExplorerContext);
    if(!context){
        throw new Error("useExplorer must be used within a ExplorerProvider");
    }
    return context;
}

// eslint-disable-next-line react/prop-types
export function ExplorerProvider({children}){
    const [image, setImage] = useState([])

    const getImages = async () =>{
        try {
            const res = await searchImages();
            setImage(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    const deleteImages = async(id)=>{
        try {
            const res = await removeImages(id)
            if(res.data.result === "ok"){
                Swal.fire({
                    position: "top",
                    icon: "success",
                    title: "File delete successfully",
                    showConfirmButton: false,
                    timer: 2500
                });
            }else{
                Swal.fire({
                    position: "top",
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                    showConfirmButton: false,
                    timer: 2500
                });
            }
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
    }

    return (
        <ExplorerContext.Provider value={{image, getImages, deleteImages}}>
            {children}
        </ExplorerContext.Provider>
    )
}