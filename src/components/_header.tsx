"use client";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { useAuth } from '@/context/authcontext';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation'
import { AnimatePresence, motion } from "framer-motion";


interface HeaderProps {
  toggleRegisterModal: () => void;
  toggleLoginModal: () => void;
}

const _Header: React.FC<HeaderProps> = ({ toggleRegisterModal, toggleLoginModal }) => {
  const { user, logout } = useAuth(); // Access global auth state via the useAuth hook
  const pathname = usePathname(); 
  const isLandingPage = pathname === '/landing';
  const isBecomeTaskerPage = pathname === '/becometasker';

  const router = useRouter()

  return (

    <AnimatePresence mode="wait">
      <motion.header className="bg-white text-black p-5 border-2 border-b-gray-200">
        {/* Navigation container */}
        <nav className="flex justify-between items-center h-fit px-4 lg:px-8">
          
          {/* Logo */}
          <button onClick={() => router.push(isLandingPage ? '/landing' : '/homepage')}>
            <img
              className="w-[337px] max-h-[73px] max-md:w-[200px] md:w-[300px]"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/c393fb4d98d77eb3cb0ee04acb1cc7e93bc7d7784c5e8f8ef8df0c8320a2add1"
              alt="Company logo"
            />
          </button>

          {/* Desktop Navigation Links */}
          <div className={`${!isLandingPage ? 'text-xl font-normal max-lg:hidden ' : 'text-lg font-semibold hidden md:flex'}`}>
            <ul className="flex gap-8 items-center">
              <li>
                <button className="hover:text-blue-500 transition ease-in-out duration-300">
                  <b>Services</b>
                </button>
              </li>
              {(!isLandingPage && !isBecomeTaskerPage) && (
                <li>
                  <button onClick={() => router.push('/becometasker')} className="px-10 py-3 hover:bg-blue-500 text-blue-500 hover:text-white border-2 border-blue-500 rounded-xl transition ease-in-out duration-300">
                    <b>Become a Tasker</b>
                  </button>
                </li>
              )}
              {!user ? (
                <li>
                  <button onClick={toggleRegisterModal} className="hover:text-blue-500 transition ease-in-out duration-300">
                    <b>Sign up</b>
                  </button>
                  <b> / </b>
                  <button onClick={toggleLoginModal} className="hover:text-blue-500 transition ease-in-out duration-300">
                    <b>Log in</b>
                  </button>
                </li>
              ) : (
                <li>
                  <button onClick={logout} className="hover:text-blue-500 transition ease-in-out duration-300">
                    Logout
                  </button>
                </li>
              )}
            </ul>
          </div>
          <Popover>
            <PopoverTrigger asChild>
              <Button variant="ghost" className={`${!isLandingPage ? 'lg:hidden' : 'md:hidden '}`}>
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
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-50 p-5">
            <ul className="flex flex-col gap-8 items-center text-regula\">
                <li>
                  <button className="hover:text-blue-500 transition ease-in-out duration-300">
                    <b>Services</b>
                  </button>
                </li>
                {(!isLandingPage && !isBecomeTaskerPage) && (
                  <li>
                    <button onClick={() => router.push('/becometasker')} className="px-4 py-2 hover:bg-blue-500 text-blue-500 hover:text-white border-2 border-blue-500 rounded-lg transition ease-in-out duration-300">
                      <b>Become a Tasker</b>
                    </button>
                  </li>
                )}
                {!user ? (
                  <li>
                    <button onClick={toggleRegisterModal} className="hover:text-blue-500 transition ease-in-out duration-300">
                      <b>Sign up</b>
                    </button>
                    <b> / </b>
                    <button onClick={toggleLoginModal} className="hover:text-blue-500 transition ease-in-out duration-300">
                      <b>Log in</b>
                    </button>
                  </li>
                ) : (
                  <li>
                    <button onClick={logout} className="hover:text-blue-500 transition ease-in-out duration-300">
                      Logout
                    </button>
                  </li>
                )}
              </ul>
            </PopoverContent>
          </Popover>
        </nav>
      </motion.header>
    </AnimatePresence>
  );
};

export default _Header;
