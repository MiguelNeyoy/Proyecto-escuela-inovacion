import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';

const SearchCooling: React.FC = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    type: 'all',
    socket: 'all',
    size: 120
  });

  const handleSearch = () => {
    navigate('/results', { state: filters });
  };

  const handleReset = () => {
    setFilters({ type: 'all', socket: 'all', size: 120 });
  };

  return (
    <div className="flex h-screen flex-col bg-background-light dark:bg-background-dark font-display">
      {/* Header fijo */}
      <div className="shrink-0 z-20">
        <TopBar title="Buscar Refrigeración" />
      </div>
      
      {/* Contenido desplazable */}
      <main className="flex-1 overflow-y-auto px-4 pt-4 pb-6 space-y-6">
        <div className="flex flex-col">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="font-medium text-text-light dark:text-white mb-2">Tipo de Refrigeración</p>
            <div className="relative">
              <select 
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
                className="w-full rounded-lg bg-white dark:bg-card-dark border-gray-300 dark:border-gray-700 h-14 px-4 appearance-none focus:ring-2 focus:ring-primary dark:text-white"
              >
                <option value="all" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">Todos los tipos</option>
                <option value="air" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">Aire</option>
                <option value="aio" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">Líquida AIO</option>
                <option value="custom" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">Líquida Custom</option>
              </select>
               <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
            </div>
          </label>
        </div>

        <div className="flex flex-col">
          <label className="flex flex-col min-w-40 flex-1">
            <p className="font-medium text-text-light dark:text-white mb-2">Socket Compatible</p>
            <div className="relative">
              <select 
                value={filters.socket}
                onChange={(e) => setFilters({...filters, socket: e.target.value})}
                className="w-full rounded-lg bg-white dark:bg-card-dark border-gray-300 dark:border-gray-700 h-14 px-4 appearance-none focus:ring-2 focus:ring-primary dark:text-white"
              >
                <option value="all" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">Cualquier socket</option>
                <option value="am4" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">AM4</option>
                <option value="am5" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">AM5</option>
                <option value="lga1700" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">LGA1700</option>
                <option value="lga1200" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">LGA1200</option>
              </select>
               <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
            </div>
          </label>
        </div>

        <div className="space-y-3 pt-2">
          <div className="flex justify-between">
            <p className="font-medium text-text-light dark:text-white">Tamaño del Radiador/Ventilador</p>
            <p className="text-primary font-bold">{filters.size}mm</p>
          </div>
          <input 
            type="range" 
            min="120" 
            max="420" 
            step="20"
            value={filters.size}
            onChange={(e) => setFilters({...filters, size: parseInt(e.target.value)})}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary" 
          />
          <div className="flex justify-between text-xs text-gray-500">
            <span>120mm</span>
            <span>420mm</span>
          </div>
        </div>
      </main>

      {/* Footer fijo */}
      <footer className="shrink-0 p-4 space-y-3 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
        <button onClick={handleSearch} className="w-full bg-primary text-white font-bold h-12 rounded-lg shadow hover:bg-opacity-90 transition-colors">
          Buscar
        </button>
        <button onClick={handleReset} className="w-full text-text-light dark:text-white font-medium h-12 rounded-lg border border-gray-300 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors">
          Restablecer Filtros
        </button>
      </footer>
    </div>
  );
};

export default SearchCooling;