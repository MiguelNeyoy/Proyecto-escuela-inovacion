import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { PageContainer } from '../components/PageContainer';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  // Get the page the user was trying to access, or default to home
  const from = location.state?.from?.pathname || '/home';

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate(from, { replace: true });
  };

  return (
    <PageContainer className="flex min-h-screen w-full flex-col items-center justify-center p-6 font-grotesk">
      <div className="flex w-full max-w-sm flex-col items-center gap-6">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 dark:bg-primary/20 animate-zoom-in">
          <span className="material-symbols-outlined text-5xl text-primary">memory</span>
        </div>
        
        <h1 className="text-center text-3xl font-bold leading-tight text-text-light dark:text-white animate-slide-in-down">
          Buy&Safely
        </h1>

        <form onSubmit={handleLogin} className="flex w-full flex-col gap-4 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
          <label className="flex flex-col">
            <p className="pb-2 text-base font-medium text-text-light dark:text-text-dark">Email</p>
            <input
              type="email"
              className="h-14 w-full rounded-lg border border-gray-300 bg-white p-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-600 dark:bg-card-dark dark:text-white"
              placeholder="user@example.com"
              required
            />
          </label>
          
          <label className="flex flex-col">
            <div className="flex w-full items-center justify-between pb-2">
              <p className="text-base font-medium text-text-light dark:text-text-dark">Password</p>
              <Link to="/reset-password" className="text-sm font-medium text-primary hover:underline">
                Forgot?
              </Link>
            </div>
            <div className="flex w-full items-center rounded-lg border border-gray-300 bg-white dark:border-gray-600 dark:bg-card-dark">
              <input
                type="password"
                className="h-14 w-full flex-1 border-none bg-transparent p-4 text-base focus:ring-0 dark:text-white"
                placeholder="••••••••"
                required
              />
              <button type="button" className="px-4 text-gray-500">
                <span className="material-symbols-outlined">visibility_off</span>
              </button>
            </div>
          </label>

          <button
            type="submit"
            className="mt-2 h-14 w-full rounded-lg bg-primary text-base font-bold text-white transition-transform active:scale-95"
          >
            Log In
          </button>
        </form>

        <p className="text-center text-sm text-gray-500 dark:text-gray-400 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
          New here? <Link to="/signup" className="font-bold text-primary hover:underline">Create an account</Link>
        </p>
        <p className="text-center text-sm animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
          <Link to="/home" className="text-gray-400 hover:text-text-light dark:hover:text-white transition-colors">
            Continue as Guest
          </Link>
        </p>
      </div>
    </PageContainer>
  );
};

export default Login;