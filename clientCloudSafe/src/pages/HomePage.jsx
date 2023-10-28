function HomePage() {
    return(
        <div className="w-full min-h-screen bg-[#1F0061] px-28 pt-5">
            <nav className="flex items-center">
                <img className="w-48" src="https://i.ibb.co/cbWqrcs/Sin-t-tulo-3.png"/>
                <ul className="flex-1 text-right font-semibold text-base">
                    <li className="list-none inline-block px-5"><a className="no-underline text-white px-2 hover:text-[#b40df7] cursor-pointer">Home</a></li>
                    <li className="list-none inline-block px-5"><a className="no-underline text-white px-2 hover:text-[#b40df7]" href="https://github.com/gvieiradev">About us</a></li>
                    <li className="list-none inline-block px-5"><a className="no-underline text-white px-2 hover:text-[#b40df7]" href="https://twitter.com/Gabriel_Dev1">Contact</a></li>
                    <li className="list-none inline-block px-5"><a className="no-underline text-white px-2 hover:text-[#b40df7]" href="/login">Sing in</a></li>
                </ul>
            </nav>

            <div className="text-white mt-40">
                <h1 className="text-5xl font-semibold">All your documents</h1>
                <h1 className="text-6xl font-semibold mb-4">in the Cloud</h1>
                <p>Discover CloudSafe, the file sharing platform that you can use <br />
                as a personal and secure storage space in the cloud</p>
                
                <div className="mt-10">
                    <a href="/register" className="bg-[#b40df7] rounded-3xl py-3 px-8 font-medium inline-block mr-4 hover:bg-[#d56aff] hover:text-[#623075] duration-100">Get Started</a>
                </div>
            </div>
            <img className=" w-2/5 h-90 xl:absolute top-24 bottom-0 right-20" src="https://i.ibb.co/crkfN3z/cwok-casual-19.png"/>
            <img className="w-28 -ml-28 mt-11" src="https://i.ibb.co/WkFDpVw/fce45d68d7ac59820e2c4d2f01d6fa20.png"/>
        </div>
    )
}

export default HomePage