// app/(auth)/register/page.tsx

"use client";  // To use Client Component features

import { useState, useEffect } from 'react';

const _RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState<string | null>(null);

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock registration logic for demo purposes
    setSuccess('Registration successful. Please log in.');
  };

  return (
    <form onSubmit={handleRegister} className="flex flex-col gap-6">
      {success && <p className="text-green-500">{success}</p>}
      <div className="flex flex-col">
        <label htmlFor="fullname" className='text-gray-500 text-[15px]'>Full Name</label>
        <input
          type="text"
          placeholder="Enter your Full Name here"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="py-3 px-7 border rounded-2xl bg-gray-200"
          required
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className='text-gray-500 tex-[15px]'>Email</label>
        <input
          type="email"
          placeholder="Enter your Email here"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="py-3 px-7 border rounded-2xl bg-gray-200"
          required
        />  
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className='text-gray-500 text-[15px]'>Password</label>
        <input
          type="password"
          placeholder="Enter your Password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-3 px-7 border rounded-2xl bg-gray-200"
          required
        />
      </div>
      <button type="submit" className="w-fit place-self-center bg-[#60A5FA] text-white text-xl font-medium py-2 px-12 rounded-lg hover:bg-blue-600">
        Create Account
      </button>
    </form>
  );
};

interface ModalBackdropProps {
  open: boolean;
  onClose: () => void;

  toggleLoginModal: () => void;
}


const _RegisterModal: React.FC<ModalBackdropProps> = ({ open, onClose, toggleLoginModal }) => {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (open) {
      setShouldRender(true);
    } else {
      const timer = setTimeout(() => setShouldRender(false), 300); // Adjust time as needed
      return () => clearTimeout(timer);
    }
  }, [open]);

  if (!shouldRender) return null;

  return (
    <main onClick={onClose} className={`fixed inset-0 flex justify-center items-center transition-all duration-300 ease-in-out transform ${open ? "visible bg-black/75 backdrop-blur-md" : "invisible"}`}>
      <div className={`flex justify-center content-center w-fit transition-all duration-300 ease-in-out transform bg-blue-400 ${open ? "scale-100 opacity-100" : "scale-75 opacity-0"}`}>
        <div onClick={(e) => e.stopPropagation()} className={`container w-[533px] h-auto ml-auto p-24 font-poppins rounded-r-3xl rounded-l-lg transform`}>
          <p></p>
        </div>
        <div onClick={(e) => e.stopPropagation()} className={`container w-fit h-fit mr-auto p-24 font-poppins rounded-l-3xl rounded-r-lg bg-white transition-all duration-300 ease-in-out transform`}>
          <p className="text-xl font-black mb-7 text-center">Create your Free Account</p>
          <_RegisterForm />
          <div className="grid place-items-center gap-3 mt-6">
            <div className="flex justify-center gap-1 mt-2 text-gray-500 text-xs">
              <p>
                Alread have an account?
              </p>
              <button onClick={() => {onClose(); toggleLoginModal();}} className="tracking-tighter text-[#60A5FA]">
                Log in
              </button>
            </div>
            <h3 className="text-gray-400">- OR -</h3>
            <div className="w-full flex justify-evenly gap-5">
              <button className="flex justify-around items-center gap-2 p-2 border border-gray-500 rounded-2xl text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                  <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                </svg>
                Sign in with Google
              </button>
              <button className="flex justify-around items-center gap-2 p-2 border border-gray-500 rounded-2xl text-xs">
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="36" height="36" viewBox="0 0 48 48">
                  <path fill="#fff" d="M41,24c0,9.4-7.6,17-17,17S7,33.4,7,24S14.6,7,24,7S41,14.6,41,24z"></path><path fill="#455a64" d="M21 41v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-6.5c0-.3.2-.5.5-.5s.5.2.5.5V41h2v-5.5c0-.3.2-.5.5-.5s.5.2.5.5V41h1.8c.2-.3.2-.6.2-1.1V36c0-2.2-1.9-5.2-4.3-5.2h-2.5c-2.3 0-4.3 3.1-4.3 5.2v3.9c0 .4.1.8.2 1.1L21 41 21 41zM40.1 26.4C40.1 26.4 40.1 26.4 40.1 26.4c0 0-1.3-.4-2.4-.4 0 0-.1 0-.1 0-1.1 0-2.9.3-2.9.3-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2-.3 3.1-.3 1.1 0 2.4.4 2.5.4.1 0 .1.1.1.2C40.2 26.3 40.2 26.4 40.1 26.4zM39.8 27.2C39.8 27.2 39.8 27.2 39.8 27.2c0 0-1.4-.4-2.6-.4-.9 0-3 .2-3.1.2-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.1.1 0 2.2-.2 3.1-.2 1.3 0 2.6.4 2.6.4.1 0 .1.1.1.2C39.9 27.1 39.9 27.2 39.8 27.2zM7.8 26.4c-.1 0-.1 0-.1-.1 0-.1 0-.1.1-.2.8-.2 2.4-.5 3.3-.5.8 0 3.5.2 3.6.2.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0-2.7-.2-3.5-.2C10.1 26 8.6 26.2 7.8 26.4 7.8 26.4 7.8 26.4 7.8 26.4zM8.2 27.9c0 0-.1 0-.1-.1 0-.1 0-.1 0-.2.1 0 1.4-.8 2.9-1 1.3-.2 4 .1 4.2.1.1 0 .1.1.1.1 0 .1-.1.1-.1.1 0 0 0 0 0 0 0 0-2.8-.3-4.1-.1C9.6 27.1 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9 8.2 27.9z"></path><path fill="#455a64" d="M14.2,23.5c0-4.4,4.6-8.5,10.3-8.5c5.7,0,10.3,4,10.3,8.5S31.5,31,24.5,31S14.2,27.9,14.2,23.5z"></path><path fill="#455a64" d="M28.6 16.3c0 0 1.7-2.3 4.8-2.3 1.2 1.2.4 4.8 0 5.8L28.6 16.3zM20.4 16.3c0 0-1.7-2.3-4.8-2.3-1.2 1.2-.4 4.8 0 5.8L20.4 16.3zM20.1 35.9c0 0-2.3 0-2.8 0-1.2 0-2.3-.5-2.8-1.5-.6-1.1-1.1-2.3-2.6-3.3-.3-.2-.1-.4.4-.4.5.1 1.4.2 2.1 1.1.7.9 1.5 2 2.8 2 1.3 0 2.7 0 3.5-.9L20.1 35.9z"></path><path fill="#00bcd4" d="M24,4C13,4,4,13,4,24s9,20,20,20s20-9,20-20S35,4,24,4z M24,40c-8.8,0-16-7.2-16-16S15.2,8,24,8 s16,7.2,16,16S32.8,40,24,40z"></path>
                </svg>
                Sign in with Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    
    
  );
};

export default _RegisterModal;
