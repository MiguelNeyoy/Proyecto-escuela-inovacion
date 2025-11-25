import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';

const SearchPsu: React.FC = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    power: '',
    certification: '',
    modularity: 'Semi-Modular'
  });

  const handleSearch = () => {
    navigate('/results', { state: filters });
  };

  const handleReset = () => {
    setFilters({
      power: '',
      certification: '',
      modularity: 'Semi-Modular'
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-grotesk">
      <TopBar title="Buscar Fuente de Poder" />
      
      <main className="flex-1 px-6 pt-4 space-y-6">
        <label className="flex flex-col w-full">
          <p className="text-text-light dark:text-white font-medium pb-2">Potencia</p>
          <div className="relative">
            <input
              value={filters.power}
              onChange={(e) => setFilters({...filters, power: e.target.value})}
              className="w-full rounded-lg bg-white dark:bg-card-dark border-gray-300 dark:border-gray-700 h-14 px-4 focus:ring-2 focus:ring-primary text-gray-900 dark:text-white"
              placeholder="Ej: 750"
              type="number"
            />
            <span className="absolute inset-y-0 right-4 flex items-center text-gray-500 font-medium">W</span>
          </div>
        </label>

        <label className="flex flex-col w-full">
          <p className="text-text-light dark:text-white font-medium pb-2">Certificación</p>
          <div className="relative">
            <select 
              value={filters.certification}
              onChange={(e) => setFilters({...filters, certification: e.target.value})}
              className="w-full rounded-lg bg-white dark:bg-card-dark border-gray-300 dark:border-gray-700 h-14 px-4 appearance-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white"
            >
              <option className="bg-white dark:bg-card-dark text-gray-500" value="">Seleccionar Certificación</option>
              <option className="bg-white dark:bg-card-dark text-gray-900 dark:text-white" value="white">80+ White</option>
              <option className="bg-white dark:bg-card-dark text-gray-900 dark:text-white" value="bronze">80+ Bronze</option>
              <option className="bg-white dark:bg-card-dark text-gray-900 dark:text-white" value="gold">80+ Gold</option>
              <option className="bg-white dark:bg-card-dark text-gray-900 dark:text-white" value="platinum">80+ Platinum</option>
            </select>
             <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
          </div>
        </label>

        <div>
          <p className="text-text-light dark:text-white font-medium pb-3">Modularidad</p>
          <div className="flex bg-gray-200 dark:bg-gray-800 p-1 rounded-lg">
            {['No Modular', 'Semi-Modular', 'Full Modular'].map((opt) => (
              <button 
                key={opt} 
                onClick={() => setFilters({...filters, modularity: opt})}
                className={`flex-1 py-2 rounded-md text-sm font-medium transition-all ${
                  filters.modularity === opt 
                    ? 'bg-white dark:bg-card-dark shadow-sm text-text-light dark:text-white' 
                    : 'text-gray-500 hover:text-gray-700 dark:hover:text-gray-300'
                }`}
              >
                {opt.replace(' Modular', '').replace('Semi-Modular', 'Semi')}
              </button>
            ))}
          </div>
        </div>
      </main>

      <div className="p-6 space-y-3 mt-auto">
        <button onClick={handleReset} className="w-full h-12 text-primary bg-primary/10 rounded-lg font-semibold hover:bg-primary/20 transition-colors">Limpiar Filtros</button>
        <button onClick={handleSearch} className="w-full h-14 bg-primary text-white rounded-lg font-bold text-lg shadow-md hover:bg-primary-alt transition-colors">
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchPsu;