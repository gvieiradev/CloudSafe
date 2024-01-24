import { createContext, useContext, useState } from "react";
import { searchImages } from "../api/explorer.js";

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
export const ExplorerProvider = ({children})=>{
    const [image, setImage] = useState("");

    const selectImages = async () =>{
        try {
            const res = await searchImages()
            setImage(res.data.resources)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <ExplorerContext.Provider value={{selectImages, image}}>
            {children}
        </ExplorerContext.Provider>
    )
}