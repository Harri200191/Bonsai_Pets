import { useState } from 'react';
import { Mail, Lock, User, Leaf } from 'lucide-react';

export function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full">
        <div className={`bg-white rounded-xl shadow-2xl overflow-hidden relative min-h-[600px] transition-all duration-500 ${isLogin ? 'login-mode' : 'signup-mode'}`}>
          {/* Sliding Panel */}
          <div className={`absolute top-0 left-0 w-1/2 h-full bg-emerald-800 text-white p-12 transform transition-transform duration-500 ease-in-out ${isLogin ? 'translate-x-full' : ''}`}>
            <div className="text-center">
              <Leaf className="mx-auto h-12 w-12 text-emerald-400 mb-4" />
              <h2 className="text-3xl font-bold mb-4">
                {isLogin ? 'Hello, Friend!' : 'Welcome Back!'}
              </h2>
              <p className="mb-8">
                {isLogin
                  ? 'Enter your personal details and start your journey with us'
                  : 'To keep connected with us please login with your personal info'}
              </p>
              <button
                onClick={toggleAuth}
                className="border-2 border-white rounded-full px-8 py-2 font-semibold hover:bg-white hover:text-emerald-800 transition-colors"
              >
                {isLogin ? 'Sign Up' : 'Sign In'}
              </button>
            </div>
          </div>

          {/* Forms Container */}
          <div className="flex w-full">
            {/* Login Form */}
            <div className={`w-1/2 p-12 transition-all duration-500 ${isLogin ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Sign In</h2>
              <form className="space-y-6">
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white rounded-lg py-3 font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Sign In
                </button>
              </form>
            </div>

            {/* Sign Up Form */}
            <div className={`w-1/2 p-12 transition-all duration-500 ${!isLogin ? 'opacity-100' : 'opacity-0'}`}>
              <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Create Account</h2>
              <form className="space-y-6">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="text"
                    placeholder="Name"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="email"
                    placeholder="Email"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                  <input
                    type="password"
                    placeholder="Password"
                    className="pl-10 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white rounded-lg py-3 font-semibold hover:bg-emerald-700 transition-colors"
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}