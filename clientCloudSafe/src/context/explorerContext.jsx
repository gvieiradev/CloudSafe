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

    return (
        <ExplorerContext.Provider value={{image, getImages}}>
            {children}
        </ExplorerContext.Provider>
    )
}