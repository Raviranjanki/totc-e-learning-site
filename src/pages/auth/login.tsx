import { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import { Link } from 'react-router-dom';

export default function Login() {
  const [hidden, setHidden] = useState(true);

  const handleTogglePassword = () => setHidden(!hidden);

  return (
    <section className="h-screen flex justify-center items-center">
      <div className="flex max-w-5xl">
        <div className="hidden lg:flex px-6">
          <img className="object-contain" src="/public/login_banner.png" alt="login banner" />
        </div>
        <div className="my-auto space-y-6 px-6 lg:basis-1/2 lg:w-2/5">
          <div className="text-center space-y-6">
            <h1 className="font-medium">Welcome to TOTC...!</h1>
            <div className="bg-viking-lighter mx-auto w-max p-2 rounded-full flex gap-10">
              <Link to="/login" className="px-10 text-white py-1.5 bg-viking-dark rounded-full">
                Login
              </Link>
              <Link to="/register" className="px-10 text-white py-1.5">
                Register
              </Link>
            </div>
          </div>
          <p className="text-gray-500">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
          <form className="flex flex-col space-y-6">
            <div className="flex flex-col space-y-2">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                id="username"
                className="border border-viking-dark rounded-full px-5 py-2"
                placeholder="Enter your user name"
              />
            </div>
            <div className="flex flex-col space-y-2 relative">
              <label htmlFor="password">Password</label>
              <input
                type={hidden ? 'password' : 'text'}
                name="password"
                id="password"
                className="border border-viking-dark rounded-full px-5 py-2"
                placeholder="Enter your password"
              />
              {hidden ? (
                <IoMdEyeOff
                  onClick={handleTogglePassword}
                  className="absolute select-none bottom-2.5 right-4 cursor-pointer"
                  size="20"
                />
              ) : (
                <IoMdEye
                  onClick={handleTogglePassword}
                  className="absolute bottom-3.5 right-4 cursor-pointer"
                  size="20"
                />
              )}
            </div>
            <div className="flex justify-between">
              <div className="flex gap-2">
                <input type="checkbox" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="#">Forgot Password ?</Link>
            </div>
            <button className="px-20 py-2 text-lg font-medium self-end text-white bg-viking-dark rounded-full">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
