"use client";

import { useAuth } from '@/context/authcontext';
{/*import Link from 'next/link';*/}


interface HeaderProps {
  toggleRegisterModal: () => void;
  toggleLoginModal: () => void;
}

const _Header: React.FC<HeaderProps> = ({ toggleRegisterModal, toggleLoginModal }) => {
  const { user, logout } = useAuth(); // Access global auth state via the useAuth hook

  

  return (
    <header className="bg-white text-black p-4 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
      {/* Navigation container */}
      <nav className="flex justify-between items-center px-4 lg:px-8">
        
        {/* Logo */}
        <a href="" className="flex-shrink-0">
          <img
            className="w-[337px] max-h-[63px] max-md:w-[200px] md:w-[300px]"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/c393fb4d98d77eb3cb0ee04acb1cc7e93bc7d7784c5e8f8ef8df0c8320a2add1"
            alt="Company logo"
          />
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex text-lg font-bold">
          <ul className="flex gap-8 items-center">
            <li>
              <button className="hover:text-blue-500">
                <b>Services</b>
              </button>
            </li>
            {!user ? (
              <li>
                <button onClick={toggleRegisterModal} className="hover:text-blue-500">
                  <b>Sign up</b>
                </button>
                <b> / </b>
                <button onClick={toggleLoginModal} className="hover:text-blue-500">
                  <b>Log in</b>
                </button>
              </li>
            ) : (
              <li>
                <button onClick={logout} className="hover:text-blue-500">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>

        <div className="md:hidden">
          <button
            className="text-gray-800 hover:text-blue-500 focus:outline-none"
            aria-label="Menu"
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
};

export default _Header;
