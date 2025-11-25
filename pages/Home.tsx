import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col bg-background-light dark:bg-background-dark font-display">
      {/* Header */}
      <header className="px-6 pt-8 pb-4">
        <div className="flex items-center justify-between mb-6">
           <h1 className="text-2xl font-bold text-text-light dark:text-white">
            Buy&Safely
          </h1>
           <button onClick={() => navigate('/menu')} className="p-2 text-text-light dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-full transition-colors">
            <span className="material-symbols-outlined text-3xl">menu</span>
          </button>
        </div>
       
        {/* Search Bar */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative flex-grow">
            <input
              className="w-full pl-4 pr-12 py-3 bg-white dark:bg-card-dark text-text-light dark:text-white border-none rounded-xl shadow-sm focus:ring-2 focus:ring-primary"
              placeholder="Buscar componente..."
              type="text"
            />
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 space-x-1">
              <button onClick={() => navigate('/camera')} className="text-gray-500 dark:text-gray-400 p-1">
                <span className="material-symbols-outlined">photo_camera</span>
              </button>
              <div className="h-6 w-px bg-gray-300 dark:bg-gray-600"></div>
              <button onClick={() => navigate('/results')} className="text-gray-500 dark:text-gray-400 p-1">
                <span className="material-symbols-outlined">search</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Grid Menu */}
      <main className="flex-grow px-6 pb-6 overflow-y-auto">
        <div className="grid grid-cols-2 gap-4">
          <CategoryCard title="Memoria RAM" to="/search/ram" icon="memory" />
          <CategoryCard title="Almacenamiento" to="/search/storage" icon="hard_drive" />
          <CategoryCard title="Procesadores" to="/search/cpu" icon="developer_board" />
          <CategoryCard title="Fuente de Poder" to="/search/psu" icon="power" />
          <CategoryCard title="Accesorios" to="/search/accessories" icon="keyboard" />
          <CategoryCard title="Placa Madre" to="/search/motherboard" icon="settings_input_component" />
          <CategoryCard title="Tarjeta Gráfica" to="/search/gpu" icon="videogame_asset" />
          <CategoryCard title="Refrigeración" to="/search/cooling" icon="mode_fan" />
        </div>
      </main>
      
      <div className="flex justify-center pb-2">
        <div className="w-32 h-1.5 bg-gray-300 dark:bg-gray-700 rounded-full"></div>
      </div>
    </div>
  );
};

const CategoryCard: React.FC<{ title: string; to: string; icon: string }> = ({ title, to, icon }) => (
  <Link to={to} className="flex flex-col items-center justify-center p-4 h-32 bg-primary/5 dark:bg-primary/10 rounded-2xl hover:bg-primary/10 dark:hover:bg-primary/20 transition-all active:scale-95 group">
    <span className="material-symbols-outlined text-4xl text-primary mb-2 group-hover:scale-110 transition-transform">{icon}</span>
    <span className="text-primary dark:text-blue-300 font-medium text-center text-sm">{title}</span>
  </Link>
);

export default Home;