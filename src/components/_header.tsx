"use client";

import { useAuth } from '@/context/authcontext'; // Import useAuth hook from AuthContext
import Link from 'next/link';

const Header = () => {
  const { user, logout } = useAuth(); // Access global auth state via the useAuth hook

  return (
    <header className="bg-white-600 text-black p-4 shadow-[0px_0px_10px_0px_rgba(0,0,0,0.1)]">
      <nav className="mx-[50px] flex justify-between items-center">
        <img className='w-[337px] h-[63px]' src="https://cdn.builder.io/api/v1/image/assets/TEMP/c393fb4d98d77eb3cb0ee04acb1cc7e93bc7d7784c5e8f8ef8df0c8320a2add1" alt="Company logo" />
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
                  <Link href="/register" className="hover:text-blue-200">
                    <b>Sign up</b>
                  </Link>
                  <b> / </b>
                  <Link href="/login" className="hover:text-blue-200">
                    <b>Log in</b>
                  </Link>
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

export default Header;
