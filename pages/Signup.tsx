import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TopBar from '../components/TopBar';
import { useAuth } from '../context/AuthContext';
import { PageContainer } from '../components/PageContainer';

const Signup: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignup = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    navigate('/home');
  };

  return (
    <PageContainer className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-grotesk">
      <TopBar title="Create Account" />
      
      <main className="flex-1 px-4 py-3">
        <form onSubmit={handleSignup} className="flex flex-col gap-4 animate-fade-in" style={{ animationDelay: '0.1s', animationFillMode: 'backwards' }}>
          <InputGroup label="Full Name" placeholder="Enter your full name" index={0} />
          <InputGroup label="Email Address" placeholder="john.doe@email.com" index={1} />
          <InputGroup label="Password" placeholder="Enter your password" type="password" index={2} />
          <InputGroup label="Confirm Password" placeholder="Confirm your password" type="password" index={3} />

          <div className="flex items-start space-x-3 pt-4 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'backwards' }}>
            <input type="checkbox" className="mt-1 h-5 w-5 rounded border-gray-300 text-primary focus:ring-primary" required />
            <div className="flex-1 text-sm text-gray-600 dark:text-gray-400">
              I agree to the <a href="#" className="font-medium text-primary">Terms</a> and <a href="#" className="font-medium text-primary">Privacy Policy</a>.
            </div>
          </div>
          
          <div className="mt-auto pt-6 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
            <button type="submit" className="w-full h-14 bg-primary text-white font-bold rounded-lg hover:bg-opacity-90 transition-all">
              Register
            </button>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
              Already have an account? <Link to="/login" className="font-medium text-primary">Log in</Link>
            </p>
          </div>
        </form>
      </main>
    </PageContainer>
  );
};

const InputGroup: React.FC<{ label: string, placeholder: string, type?: string, index?: number }> = ({ label, placeholder, type = "text", index = 0 }) => (
  <label className="flex flex-col animate-slide-in-up" style={{ animationDelay: `${0.15 + index * 0.1}s`, animationFillMode: 'backwards' }}>
    <p className="text-text-light dark:text-white text-base font-medium pb-2">{label}</p>
    <input 
      type={type} 
      className="h-14 w-full rounded-lg border border-gray-300 bg-white p-4 text-base focus:border-primary focus:ring-2 focus:ring-primary/20 dark:border-gray-700 dark:bg-card-dark dark:text-white"
      placeholder={placeholder}
      required
    />
  </label>
);

export default Signup;