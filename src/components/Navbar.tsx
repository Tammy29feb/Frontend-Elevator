'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

const Navbar = () => {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    setUser(null);
    window.location.reload();
  };
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Tamana
            </Link>
          </div>
          <div className="hidden sm:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Home</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Products</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">Categories</Link>
            <Link href="#" className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium">About</Link>
          </div>
          <div className="flex items-center space-x-4">
            <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-200 relative">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1.5 py-0.5 text-xs font-bold leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-blue-600 rounded-full">3</span>
            </button>
            {user ? (
              <div className="flex items-center space-x-4">
                <span className="hidden sm:block text-sm font-medium text-gray-700">Hi, {user.username}</span>
                <button
                  onClick={handleLogout}
                  className="px-5 py-2.5 rounded-full bg-gray-100 text-gray-900 font-medium hover:bg-gray-200 transition-all duration-200"
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link href="/login" className="hidden sm:block px-5 py-2.5 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-200 shadow-lg shadow-blue-200">
                Sign In
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
