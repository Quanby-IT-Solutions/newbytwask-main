"use client";

import { useAuth } from '@/context/authcontext'; // Import useAuth hook from AuthContext
import Link from 'next/link';

interface HeaderProps {
  toggleRegisterModal: () => void;
  toggleLoginModal: () => void;
}

const _Header: React.FC<HeaderProps> = ({ toggleRegisterModal, toggleLoginModal }) => {
  const { user, logout } = useAuth(); // Access global auth state via the useAuth hook

  return (
    <header className="bg-white-600 text-black p-4 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
      <nav className="mx-[50px] flex justify-between items-center">
        <a href="">
          <img className='w-[337px] h-[63px]' src="https://cdn.builder.io/api/v1/image/assets/TEMP/c393fb4d98d77eb3cb0ee04acb1cc7e93bc7d7784c5e8f8ef8df0c8320a2add1" alt="Company logo" />
        </a>
        <div className="text-lg font-bold"> 
          <ul className="flex gap-10 items-center">
            {/* Conditionally change the Home link based on user state */}
            <li>
              <Link href="/faq" className="hover:text-blue-200">
                <b>Services</b>
              </Link>
            </li>
            {!user ? (
                <li>
                  <button onClick={toggleRegisterModal}>
                    <b className='hover:text-blue-200'>Sign up</b>
                  </button>
                  <b> / </b>
                  <button onClick={toggleLoginModal}>
                    <b className='hover:text-blue-200'>Log in</b>
                  </button>
                </li>
            ) : (
              <li>
                <button onClick={logout} className="hover:text-blue-200">
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default _Header;
