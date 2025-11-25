import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';

const SearchCpu: React.FC = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    brand: '',
    series: '',
    generation: '',
    socket: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    navigate('/results', { state: filters });
  };

  const handleReset = () => {
    setFilters({ brand: '', series: '', generation: '', socket: '' });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-display">
      <TopBar title="Procesadores" />
      
      <main className="flex-1 p-6">
        <p className="text-gray-500 dark:text-gray-400 mb-8 text-center">
          Rellena los campos para encontrar el procesador que necesitas.
        </p>

        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">Marca</label>
            <div className="relative">
              <select 
                name="brand"
                value={filters.brand}
                onChange={handleChange}
                className="w-full appearance-none pl-4 pr-10 py-3 bg-white dark:bg-card-dark text-gray-800 dark:text-white border-none rounded-lg focus:ring-2 focus:ring-primary shadow-sm"
              >
                <option value="">Selecciona una marca</option>
                <option value="Intel">Intel</option>
                <option value="AMD">AMD</option>
              </select>
              <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">expand_more</span>
            </div>
          </div>

          {[
            { name: 'series', label: 'Serie', placeholder: 'Ej: Core i9, Ryzen 7' },
            { name: 'generation', label: 'Generación', placeholder: 'Ej: 13th, 7000 Series' },
            { name: 'socket', label: 'Socket', placeholder: 'Ej: LGA1700, AM5' },
          ].map((field) => (
            <div key={field.name}>
              <label className="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300">{field.label}</label>
              <input
                type="text"
                name={field.name}
                value={(filters as any)[field.name]}
                onChange={handleChange}
                placeholder={field.placeholder}
                className="w-full pl-4 pr-4 py-3 bg-white dark:bg-card-dark text-gray-800 dark:text-white border-none rounded-lg focus:ring-2 focus:ring-primary shadow-sm"
              />
            </div>
          ))}
        </form>
      </main>

      <div className="p-6 space-y-3">
        <button
          onClick={handleReset}
          className="w-full text-primary font-bold py-3 rounded-lg hover:bg-primary/10 transition-colors"
        >
          Limpiar
        </button>
        <button
          onClick={handleSearch}
          className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-colors flex items-center justify-center space-x-2"
        >
          <span>Buscar</span>
          <span className="material-symbols-outlined">search</span>
        </button>
      </div>
    </div>
  );
};

export default SearchCpu;