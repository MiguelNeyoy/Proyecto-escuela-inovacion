import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Menu: React.FC = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  // Animación de entrada
  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleLogout = () => {
    setIsOpen(false);
    setTimeout(() => {
      logout();
      navigate('/home');
    }, 300);
  };

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => {
      navigate(-1);
    }, 300);
  };

  const handleNavigation = (to: string) => {
    setIsOpen(false);
    setTimeout(() => {
      navigate(to);
    }, 300);
  };

  const menuItems = [
    { icon: 'sell', label: 'Ofertas', to: '/offers' },
    { icon: 'local_fire_department', label: 'Tendencias', to: '/trends' },
    { icon: 'confirmation_number', label: 'Cupones', to: '/coupons' },
    { icon: 'newspaper', label: 'Noticias', to: '/news' },
    { icon: 'alternate_email', label: 'Contáctanos', to: '/contact' },
  ];

  return (
    <>
      {/* Fondo oscuro con animación */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={handleClose}
      />
      
      {/* Menú con animación de deslizamiento */}
      <div className={`flex h-screen flex-col bg-background-light dark:bg-background-dark p-6 font-display fixed inset-0 w-full transition-all duration-300 transform ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}>
      <header className="flex justify-between items-center mb-10 pt-4">
        <h1 className="text-3xl font-bold text-text-light dark:text-white">
          Buy&Safely
        </h1>
        <button 
          onClick={handleClose} 
          className="text-text-light dark:text-white p-2 hover:bg-gray-100 dark:hover:bg-white/10 rounded-full transition-colors"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
      </header>

      <nav className="flex-grow">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={item.label} style={{
              animation: isOpen ? `slideInLeft 0.5s ease-out ${index * 0.1}s both` : 'none'
            }}>
              <button
                onClick={() => handleNavigation(item.to)}
                className="flex w-full items-center p-4 rounded-xl text-lg text-text-light dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-800 transition-all hover:translate-x-2"
              >
                <span className="material-symbols-outlined mr-4 text-primary">{item.icon}</span>
                {item.label}
              </button>
            </li>
          ))}
          
          <li className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-4" style={{
            animation: isOpen ? `slideInLeft 0.5s ease-out ${menuItems.length * 0.1}s both` : 'none'
          }}>
            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="flex w-full items-center p-4 rounded-xl text-lg text-red-500 font-medium hover:bg-red-50 dark:hover:bg-red-900/10 transition-all hover:translate-x-2"
              >
                <span className="material-symbols-outlined mr-4">logout</span>
                Cerrar Sesión
              </button>
            ) : (
              <button
                onClick={() => handleNavigation('/login')}
                className="flex w-full items-center p-4 rounded-xl text-lg text-primary font-medium hover:bg-primary/5 transition-all hover:translate-x-2"
              >
                <span className="material-symbols-outlined mr-4">login</span>
                Iniciar Sesión
              </button>
            )}
          </li>
        </ul>
      </nav>
    </div>
    </>
  );
};

export default Menu;