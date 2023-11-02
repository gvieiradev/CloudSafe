import Navbar from "../components/navbar"

function ProfilePage() {
    return(
        <div>
            <Navbar/>
            <div className="p-3 relative">
            <div className="bg-gray-100 border-2 border-gray-300 w-96 mt-3 rounded-xl pb-1 absolute top-1/2 left-1/3">
                <div className="w-1/4 ml-20 inline-grid items-center m-auto mt-12 font-sans font-bold">
                    <label htmlFor="name">Full Name:</label>
                    <input className=" py-2 rounded-md" type="text" name="name"/>

                    <label className="mt-6" htmlFor="username">Username:</label>
                    <input className="py-2 rounded-md" type="text" name="username"/>

                    <label className="mt-6" htmlFor="email">Email:</label>
                    <input className="py-2 rounded-md" type="email" name="email"/>

                    <button type="button" className="mt-10 mb-5 text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save Changes</button>
                </div>

                
            </div>
            </div>
        </div>
    )
}

export default ProfilePage