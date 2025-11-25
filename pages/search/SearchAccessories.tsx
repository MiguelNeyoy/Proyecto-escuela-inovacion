import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';

const SearchAccessories: React.FC = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    type: 'Teclado',
    connectivity: 'USB',
    brand: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFilters({ type: 'Teclado', connectivity: 'USB', brand: '' });
  };

  const handleSearch = () => {
    navigate('/results', { state: filters });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-display">
      <TopBar title="Buscar Accesorios" />
      
      <main className="flex-1 px-4 pt-4">
        <h3 className="font-bold text-lg mb-4 text-text-light dark:text-white">Filtros de Búsqueda</h3>
        
        <div className="space-y-4">
          <label className="block">
            <p className="font-medium mb-2 text-text-light dark:text-gray-300">Tipo</p>
            <div className="relative">
              <select 
                name="type"
                value={filters.type}
                onChange={handleChange}
                className="w-full rounded-lg bg-white dark:bg-card-dark border-gray-300 dark:border-gray-700 h-14 px-4 focus:ring-2 focus:ring-primary dark:text-white appearance-none"
              >
                <option value="Teclado" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">Teclado</option>
                <option value="Ratón" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">Ratón</option>
                <option value="Auriculares" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">Auriculares</option>
                <option value="Webcam" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">Webcam</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
            </div>
          </label>

           <label className="block">
            <p className="font-medium mb-2 text-text-light dark:text-gray-300">Conectividad</p>
            <div className="relative">
              <select 
                name="connectivity"
                value={filters.connectivity}
                onChange={handleChange}
                className="w-full rounded-lg bg-white dark:bg-card-dark border-gray-300 dark:border-gray-700 h-14 px-4 focus:ring-2 focus:ring-primary dark:text-white appearance-none"
              >
                <option value="USB" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">USB</option>
                <option value="Inalámbrico" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">Inalámbrico</option>
                <option value="Bluetooth" className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">Bluetooth</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
            </div>
          </label>

           <label className="block">
            <p className="font-medium mb-2 text-text-light dark:text-gray-300">Marca</p>
            <input 
              name="brand"
              value={filters.brand}
              onChange={handleChange}
              type="text" 
              placeholder="Ej: Logitech" 
              className="w-full rounded-lg bg-white dark:bg-card-dark border-gray-300 dark:border-gray-700 h-14 px-4 focus:ring-2 focus:ring-primary dark:text-white"
            />
          </label>
        </div>

        <div className="flex justify-center mt-6">
          <button onClick={handleReset} className="text-primary font-medium hover:underline">Limpiar filtros</button>
        </div>
      </main>

      <div className="p-4 border-t border-gray-200 dark:border-gray-800 mt-auto">
        <button onClick={handleSearch} className="w-full h-14 bg-primary text-white font-bold rounded-xl shadow-md hover:bg-opacity-90 transition-colors">
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchAccessories;