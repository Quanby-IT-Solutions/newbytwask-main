'use client';

import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/authcontext';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface AuthFormProps {
  isLogin: boolean;
  onSubmit: (data: { email: string; password: string; name?: string }) => void;
  error: string | null;
}

const AuthForm: React.FC<AuthFormProps> = ({ isLogin, onSubmit, error }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(isLogin ? { email, password } : { email, password, name });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      {error && <p className="text-red-500">{error}</p>}
      {!isLogin && (
        <div className="flex flex-col">
          <label htmlFor="fullname" className="text-gray-500 text-[15px]">
            Full Name
          </label>
          <input
            type="text"
            placeholder="Enter your Full Name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="py-3 px-7 border rounded-2xl bg-gray-200"
            required={!isLogin}
          />
        </div>
      )}
      <div className="flex flex-col">
        <label htmlFor="email" className="text-gray-500 text-[15px]">
          Email
        </label>
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
        <label htmlFor="password" className="text-gray-500 text-[15px]">
          Password
        </label>
        <input
          type="password"
          placeholder="Enter your Password here"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="py-3 px-7 border rounded-2xl bg-gray-200"
          required
        />
      </div>
      <button
  type="submit"
  className="w-fit place-self-center bg-[#60A5FA] text-white text-xl font-medium py-2 px-6 rounded-lg hover:bg-blue-600"
>
  {isLogin ? 'Login' : 'Create Account'}
</button>

    </form>
  );
};

interface AuthSliderModalProps {
  open: boolean;
  onClose: () => void;
  isLogin: boolean;
}

const _AuthSliderModal: React.FC<AuthSliderModalProps> = ({ open, onClose, isLogin: initialIsLogin }) => {
  const [isLogin, setIsLogin] = useState(initialIsLogin);
  const [error, setError] = useState<string | null>(null);
  const { login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    setIsLogin(initialIsLogin);
  }, [initialIsLogin]);

  const handleSubmit = (data: { email: string; password: string; name?: string }) => {
    if (isLogin) {
      // Mock login logic
      if (data.email === 'test@example.com' && data.password === 'password') {
        login({ id: '1', name: 'John Doe', email: data.email });
        router.push('/dashboard');
        onClose();
      } else {
        setError('Invalid email or password');
      }
    } else {
      // Mock registration logic
      console.log('Registration data:', data);
      setError('Registration successful. Please log in.');
      setIsLogin(true);
    }
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
    setError(null);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.main
          onClick={onClose}
          className="fixed inset-0 flex justify-center items-center bg-black/75 backdrop-blur-md z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            className="container w-[1066px] h-[600px] font-poppins rounded-3xl bg-white overflow-hidden relative flex"
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.75, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {/* Login Panel */}
            <motion.div
              className="w-1/2 p-24 z-20"
              initial={{ opacity: isLogin ? 1 : 0 }}
              animate={{ opacity: isLogin ? 1 : 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl font-black mb-7 text-center">Login to Your Account</p>
              <AuthForm isLogin={true} onSubmit={handleSubmit} error={isLogin ? error : null} />
            </motion.div>

            {/* Register Panel */}
            <motion.div
              className="w-1/2 bg-white-400 p-24 z-20"
              initial={{ opacity: isLogin ? 0 : 1 }}
              animate={{ opacity: isLogin ? 0 : 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-xl font-black mb-7 text-center text-black">Create Your Free Account</p>
              <AuthForm isLogin={false} onSubmit={handleSubmit} error={!isLogin ? error : null} />
            </motion.div>

            {/* Sliding Overlay */}
            <motion.div
              className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-blue-600 to-blue-400 z-30"
              initial={{ x: isLogin ? '0%' : '100%' }}
              animate={{ x: isLogin ? '100%' : '0%' }}
              transition={{ duration: 0.5, ease: 'easeInOut' }}
            >
              <div className="flex flex-col justify-center items-center h-full px-10 text-center text-white">
                <h2 className="text-3xl font-bold mb-4">
                  {isLogin ? 'Hello, Taskers!' : 'Welcome Back!'}
                </h2>
                <p className="mb-8">
                  {isLogin
                    ? 'Enter your personal details and start your journey with us'
                    : 'To keep connected with us please login with your personal info'}
                </p>
                <button
                  onClick={toggleAuthMode}
                  className="border-2 border-white rounded-full px-10 py-2 font-semibold hover:bg-white hover:text-blue-500 transition-colors"
                >
                  {isLogin ? 'Sign Up' : 'Sign In'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        </motion.main>
      )}
    </AnimatePresence>
  );
};

export default _AuthSliderModal;
