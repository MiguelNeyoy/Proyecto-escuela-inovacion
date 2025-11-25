import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { PageContainer } from '../components/PageContainer';

const ResetPassword: React.FC = () => {
  return (
    <PageContainer className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-grotesk">
      <TopBar title="Reset Password" />
      
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="animate-slide-in-up">
          <p className="text-base text-gray-500 dark:text-gray-400 pb-6">
            Enter the email address associated with your account and we'll send you a link to reset your password.
          </p>
          
          <label className="flex flex-col animate-slide-in-up" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
            <p className="text-text-light dark:text-white font-medium pb-2">Email Address</p>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">mail</span>
              <input 
                type="email" 
                className="h-14 w-full rounded-lg border border-gray-300 bg-white pl-12 pr-4 focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-card-dark dark:text-white"
                placeholder="Enter your email"
              />
            </div>
          </label>
        </div>

        <div className="flex flex-col items-center gap-4 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'backwards' }}>
          <button className="w-full h-12 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-all active:scale-95">
            Send Reset Link
          </button>
          <Link to="/login" className="text-primary font-medium hover:underline">
            Remembered your password? Sign In
          </Link>
        </div>
      </div>
    </PageContainer>
  );
};

export default ResetPassword;