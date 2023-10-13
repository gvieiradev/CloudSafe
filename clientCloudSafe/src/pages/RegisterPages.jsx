function RegisterPage(){
    return(
        <section className="bg-gray-50 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="sm:w-1/2 px-16">
                    <h2 className="font-bold text-2xl text-[#1F0061]">Register</h2>
                    <p className="text-sm mt-2 text-[#1F0061]">Store and share files. Everything with CloudSafe</p>

                    <form className="flex flex-col gap-4" action="">
                        <div className="relative">
                            <input className="p-2 mt-3 rounded-xl border w-full" type="text" name="fullName" placeholder="Full name"/>
                            <input className="p-2 mt-2 rounded-xl border w-full" type="text" name="userName" placeholder="Username"/>
                            <input className="p-2 mt-2 rounded-xl border w-full" type="email" name="email" placeholder="Email"/>
                            <input className="p-2 mt-2 rounded-xl border w-full" type="password" name="password" placeholder="Password"/>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="gray" className="bi bi-eye absolute -mt-5 right-3 -translate-y-1/2" viewBox="0 0 16 16">/
                                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
                            </svg>
                            <input className="p-2 mt-2 rounded-xl border w-full" type="password" name="confirmPassword" placeholder="Confirm password"/>
                            
                        </div>
                        <button className="bg-[#1F0061] rounded-xl text-white py-2 hover:scale-105 duration-300">Register</button>
                    </form>

                    <div className="mt-4 grid grid-cols-3 items-center text-gray-400">
                        <hr className="border-gray-400" />
                        <p className="text-center text-sm">OR</p>
                        <hr className="border-gray-400" />
                    </div>

                    <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 48 48">
                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                        </svg>
                        Register with Google
                    </button>

                    <p className="mt-1 text-xs border-gray-400 py-4">Already have an account?</p>
                </div>

                <div className="md:block hidden w-1/2">
                    <img className="rounded-2xl" src="https://i.ibb.co/nCQ88zZ/Sin-t-tulo-2.jpg" alt="Sin-t-tulo-2" border="0"/>
                </div>
            </div>
        </section>
    )
}

export default RegisterPage;