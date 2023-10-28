import { useForm } from "react-hook-form";
import { useAuth } from "../context/authContext";
import { Link } from "react-router-dom";
import { useState } from "react";
import {Icon} from "react-icons-kit";
import {eyeSlash} from 'react-icons-kit/fa/eyeSlash'
import {eye} from 'react-icons-kit/fa/eye'

function LoginPage(){
    const {register, handleSubmit, formState:{errors}} = useForm();
    const {signin, errors:signinError} = useAuth();
    const [icon, setIcon] = useState(eyeSlash);
    const [type, setType] = useState("password");
    const [setPassword] = useState("");

    const onSubmit = handleSubmit((data => {
        signin(data);
    }));

    const handleToggle = () =>{
        if (type === "password"){
            setIcon(eye);
            setType("text");
        }else{
            setIcon(eyeSlash);
            setType("password");
        }
    };

    return(
        <section className="bg-gray-200 min-h-screen flex items-center justify-center">
            <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
                <div className="sm:w-1/2 px-16">
                    <h2 className="font-bold text-2xl text-[#1F0061]">Login</h2>
                    <p className="text-sm mt-2 text-[#1F0061]">If you already a member, easily log in</p>
                    {
                        signinError.map((error, i) => (
                            <div className="bg-red-500 p-2 text-white" key={i}>
                                {error}
                            </div>
                        ))
                    }
                    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                        <div className="relative">
                            <input className="p-2 mt-2 rounded-xl border w-full" type="email" {...register("email", {required:true})} placeholder="Email"/>
                            {errors.email && <p className="text-red-500">email is required</p>}
                            <input className="p-2 mt-2 rounded-xl border w-full" type={type} name="password" onChange={(e) => setPassword(e.target.value)}  {...register("password", {required:true})} placeholder="Password"/>
                            <span className="absolute mt-4 right-8 -translate-y-1/2" style={{color:"#9CA3AF"}} onClick={handleToggle}>
                                <Icon className="absolute mr-10" icon={icon} size={18} color=""/>
                            </span>
                            {errors.password && <p className="text-red-500">Password is required</p>}
                        </div>
                        <button className="bg-[#1F0061] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
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
                        Login with Google
                    </button>
                    <div className="mt-3 text-xs flex justify-between items-center">
                        <p className="mt-1 text-xs border-gray-400">
                            <Link className="text-sky-500" >Forgot your password?</Link>
                        </p>
                    </div>
                    <div className="mt-3 text-xs flex justify-between items-center">
                        <p className="mt-1 text-xs border-gray-400 py-2">
                            Don&apos;t have an account? <Link className="text-sky-500" to="/register">Sign up</Link>
                        </p>
                    </div>
                </div>

                <div className="md:block hidden w-1/2">
                    <img className="rounded-2xl" src="https://i.ibb.co/nCQ88zZ/Sin-t-tulo-2.jpg" alt="Sin-t-tulo-2" border="0"/>
                </div>
            </div>
        </section>
    )
}

export default LoginPage;