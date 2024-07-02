import { useState } from "react";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { Link } from "react-router-dom";

export default function Register() {
    const [hidden, setHidden] = useState(true)

    const handleTogglePassword = () => setHidden(!hidden);

    return (
        <section className="h-screen flex justify-center">
            <div className="flex">
                <div className="object-contain p-8">
                    <img className="h-full w-auto" src="/public/register_banner.png" alt="login banner" />
                </div>
                <div className="my-auto space-y-6 w-2/5 pl-10">
                    <div className="text-center space-y-6">
                        <h1 className="font-medium">Welcome to TOTC...!</h1>
                        <div className="bg-viking-lighter mx-auto w-max p-2 rounded-full flex gap-10">
                            <Link to="/login" className="px-10 text-white py-1.5">Login</Link>
                            <Link to="/register" className="px-10 text-white py-1.5 bg-viking-dark rounded-full">Register</Link>
                        </div>
                    </div>
                    <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    <form className="flex flex-col space-y-6">
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" name="email" id="email" className="border border-viking-dark rounded-full px-5 py-2" placeholder="Enter your email address" />
                        </div>
                        <div className="flex flex-col space-y-2">
                            <label htmlFor="username">User name</label>
                            <input type="text" name="username" id="username" className="border border-viking-dark rounded-full px-5 py-2" placeholder="Enter your user name" />
                        </div>
                        <div className="flex flex-col space-y-2 relative">
                            <label htmlFor="password">Password</label>
                            <input type={hidden ? "password" : "text"} name="password" id="password" className="border border-viking-dark rounded-full px-5 py-2" placeholder="Enter your password" />
                            {hidden ?
                                <IoMdEyeOff onClick={handleTogglePassword} className="absolute select-none bottom-2.5 right-4 cursor-pointer" size="20" />
                                :
                                <IoMdEye onClick={handleTogglePassword} className="absolute select-none bottom-2.5 right-4 cursor-pointer" size="20" />}
                        </div>
                        <button className="px-20 py-2 text-lg font-medium self-end text-white bg-viking-dark rounded-full">Register</button>
                    </form>
                </div>
            </div>
        </section>
    )
}
