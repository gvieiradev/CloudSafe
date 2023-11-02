import Navbar from "../components/navbar"

function ProfilePage() {
    return(
        <div>
            <Navbar/>
            <div className="p-3 relative">
            <div className="bg-gray-100 border-2 relative border-gray-300 w-96 h-[395px] mt-3 rounded-xl float-left">
                <img className="w-44 h-44 absolute top-1/4 right-0 left-0 m-auto rounded-xl ring-2 ring-neutral-400" src="https://i.ibb.co/2nP6QTW/vecteezy-lawyer-man-3d-profession-avatars-illustrations-28241023-48.png"/>
            
                <label htmlFor="uploadFile1" className="bg-blue-700 text-white mt-80 hover:bg-blue-800 font-medium text-sm outline-none px-5 py-2.5 rounded-lg w-max cursor-pointer mx-auto block">
                    Change avatar
                    <input type="file" id='uploadFile1' className="hidden" />
                </label>
            </div>

            <div className="bg-gray-100 border-2 border-gray-300 w-3/5 h-[395px] mt-3 rounded-xl pb-1 absolute top-1/2 left-1/3">
                <div className="ml-20 inline-grid items-center m-auto mt-12 font-sans float-left font-bold">
                    <label htmlFor="name">Full Name:</label>
                    <input className=" py-2 rounded-md" type="text" name="name"/>

                    <label className="mt-6" htmlFor="username">Username:</label>    
                    <input className="py-2 rounded-md" type="text" name="username"/>

                    <label className="mt-6" htmlFor="email">Email:</label>
                    <input className="py-2 rounded-md" type="email" name="email"/>

                </div>
                <div className="ml-44 inline-grid items-center m-auto mt-12 font-sans font-bold">
                    <label htmlFor="number">Number:</label>
                    <input className=" py-2 rounded-md" type="text" name="number"/>

                    <label className="mt-6" htmlFor="country">Country:</label>    
                    <input className="py-2 rounded-md" type="text" name="country"/>

                    <label className="mt-6" htmlFor="city">City:</label>
                    <input className="py-2 rounded-md" type="email" name="city"/>
                </div>
                <button type="button" className="mt-10 mb-5 ml-80 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save Changes</button>
            </div>
            </div>
        </div>
    )
}

export default ProfilePage