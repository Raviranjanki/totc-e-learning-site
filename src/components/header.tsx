import { Link, NavLink } from 'react-router-dom';
import Profile from './profile';
import { useState } from 'react';
import { useScrollPosition } from '../hooks/useScrollPosition';
import { twMerge } from 'tailwind-merge';

export default function Header() {
  const [isUser, setIsUser] = useState(false);

  const scrollPosition = useScrollPosition()

  const changeColor = scrollPosition > 200

  return (
    <header className={twMerge("fixed z-50 inset-x-0 top-0 transition-all duration-500", changeColor ? "shadow-md bg-white" : '')}>
      <section className='max-w-7xl 2xl:max-w-screen-2xl mx-auto flex justify-between px-6 lg:px-8 py-2 space-x-10 items-center'>
        <div className="w-20 object-cover">
          {changeColor ? (
            <img className="h-full w-auto" src="/public/logo.png" alt="" />
          ) : (
            <img className="h-full w-auto" src="/public/logo2.png" alt="" />
          )}
        </div>
        <nav className={`hidden lg:flex gap-10 font-semibold ${changeColor ? '[&>*]:text-grey-lighter' : '[&>*]:text-white '}`}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/">Courses</NavLink>
          <NavLink to="/">Careers</NavLink>
          <NavLink to="/">Blog</NavLink>
          <NavLink to="/">About Us</NavLink>
        </nav>
        {isUser ? (
          <Profile />
        ) : (
          <div className="flex gap-4 font-medium">
            <Link to="/login" className="inline-flex items-center px-7 py-1.5 text-gray-600 bg-white rounded-full shadow-md">Login</Link>
            <Link to="/register" className={twMerge(`hidden lg:inline-flex items-center px-7 py-1.5 bg-white bg-opacity-40  text-white rounded-full shadow-md ${changeColor && "bg-viking-dark"}`)}>Sign Up</Link>
          </div>
        )}
      </section>
    </header>
  );
}
