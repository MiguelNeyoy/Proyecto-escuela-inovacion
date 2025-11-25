import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/home');
  };

  const menuItems = [
    { icon: 'sell', label: 'Ofertas', to: '/offers' },
    { icon: 'local_fire_department', label: 'Tendencias', to: '/trends' },
    { icon: 'confirmation_number', label: 'Cupones', to: '/coupons' },
    { icon: 'newspaper', label: 'Noticias', to: '/news' },
    { icon: 'alternate_email', label: 'Contáctanos', to: '/contact' },
  ];

  return (
    <div className="flex h-screen flex-col bg-background-light dark:bg-background-dark p-6 font-display">
      <header className="flex justify-between items-center mb-10 pt-4">
        <h1 className="text-3xl font-bold text-text-light dark:text-white">
          Buy&Safely
        </h1>
        <button 
          onClick={() => navigate('/home')} 
          className="text-text-light dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
      </header>

      <nav className="flex-grow">
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className="flex items-center p-4 rounded-xl text-lg text-text-light dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="material-symbols-outlined mr-4 text-primary">{item.icon}</span>
                {item.label}
              </Link>
            </li>
          ))}
          
          <li className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-4">
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="flex w-full items-center p-4 rounded-xl text-lg text-red-500 font-medium hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors"
              >
                <span className="material-symbols-outlined mr-4">logout</span>
                Cerrar Sesión
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center p-4 rounded-xl text-lg text-primary font-medium hover:bg-primary/5 transition-colors"
              >
                <span className="material-symbols-outlined mr-4">login</span>
                Iniciar Sesión
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;