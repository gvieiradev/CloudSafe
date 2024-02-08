import { useProfile } from "../context/profileContext.jsx";
import Navbar from "../components/navbar"
import { useEffect } from "react";


function ProfilePage() {
    const {getuserData, userData } = useProfile();

    useEffect(() => {
        getuserData();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return(
        <div>
            <Navbar/>
            <div className="p-3 relative">
            <div className="bg-gray-100 border-2 relative border-gray-300 w-96 h-[395px] mt-3 rounded-xl float-left">
                <img className="w-44 h-44 absolute top-1/4 right-0 left-0 m-auto rounded-xl ring-2 ring-neutral-400" src="https://i.ibb.co/2nP6QTW/vecteezy-lawyer-man-3d-profession-avatars-illustrations-28241023-48.png"/>
            </div>

            <div className="bg-gray-100 border-2 border-gray-300 w-3/5 h-[395px] mt-3 rounded-xl pt-10 absolute top-1/2 left-1/3">
                <div className="ml-20 inline-grid items-center m-auto mt-12 font-sans float-left font-bold">
                    <label htmlFor="name">Full Name:</label>
                    <input className=" py-2 rounded-md" type="text" name="fullName" value={userData.name || ""}/>

                    <label className="mt-6" htmlFor="username">Email:</label>
                    <input className="py-2 rounded-md" type="text" name="email" value={userData.email || ""}/>
                </div>
                <div className="ml-44 inline-grid items-center m-auto mt-12 font-sans font-bold">
                    <label htmlFor="number">Username:</label>
                    <input className=" py-2 rounded-md" type="text" name="username" value={userData.username || ""}/>

                    <label className="mt-6" htmlFor="country">Password:</label>
                    <input className="py-2 rounded-md" type="text" name="password" value={userData.password || ""}/>
                </div>
                <button type="button" className="mt-10 mb-5 ml-80 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save Changes</button>
            </div>
            </div>
        </div>
    )
}

export default ProfilePage