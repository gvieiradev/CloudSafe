import Cookies from "js-cookie"
import { useEffect, useState } from "react";
import { useAuth } from "../context/authContext";

function Navbar() {
    const [user, setUser] = useState();
    const {closeSession} = useAuth();

    useEffect(() =>{
        function dataUser (){
            const cookies = Cookies.get();
            const user = cookies.username;
            return setUser(user);
        }
    dataUser();
    }, []);

    const closeSessions = () =>{
        closeSession();
    }

    return(
        <nav className="bg-[#1F0061] w-full h-40">
            <div className="flex p-6">
                <div>
                    <img className="w-20 rounded-xl ring-2 ring-neutral-400" src="https://i.ibb.co/2nP6QTW/vecteezy-lawyer-man-3d-profession-avatars-illustrations-28241023-48.png"/>
                    <p className="w-32 ml-24 -mt-16 font-bold text-xl text-white">Welcome, </p>
                    <p className="ml-24 font-bold text-xl text-white">{user}</p>
                </div>
                <ul className="list-none text-white mt-[100px] -ml-60 cursor-pointer font-bold text-sm flex">
                    <li className="inline float-left px-4 pb-3 hover:border-b-4 rounded-b-sm transition-all"><a href="/uploader">Uploader</a></li>
                    <li className="inline float-left px-4 pb-3 hover:border-b-4 rounded-b-sm transition-all"><a href="/converter">Converter</a></li>
                    <li className="inline float-left px-4 pb-3 hover:border-b-4 rounded-b-sm transition-all"><a href="/folder">Folder</a></li>
                    <li className="inline float-left px-4 pb-3 hover:border-b-4 rounded-b-sm transition-all"><a href="/profile">Profile</a></li>
                    <li className="inline float-left px-4 pb-3 hover:border-b-4 rounded-b-sm transition-all"><a onClick={closeSessions}>Logout</a></li>
                </ul>
                <img className="w-fit h-20 ml-[600px] mt-3" src="https://i.ibb.co/J5FNfjc/Sin-t-tulo-3.png" alt="Sin-t-tulo-3" border="0"/>
            </div>
        </nav>
    )
}

export default Navbar;