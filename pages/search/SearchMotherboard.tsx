import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';

const SearchMotherboard: React.FC = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    socket: '',
    chipset: '',
    format: '',
    brand: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleReset = () => {
    setFilters({ socket: '', chipset: '', format: '', brand: '' });
  };

  const handleSearch = () => {
    navigate('/results', { state: filters });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-grotesk">
      <TopBar title="Buscar Placa Madre" />
      
      <main className="flex-1 px-4 pt-4 pb-6 space-y-4">
        {[
          { name: 'socket', label: 'Socket', options: ['AM5', 'LGA1700', 'AM4'] },
          { name: 'chipset', label: 'Chipset', options: ['B650', 'Z790', 'X670'] },
          { name: 'format', label: 'Formato', options: ['ATX', 'Micro-ATX', 'Mini-ITX'] },
          { name: 'brand', label: 'Marca', options: ['ASUS', 'Gigabyte', 'MSI'] }
        ].map((field) => (
          <div key={field.name} className="py-2">
            <label className="flex flex-col">
              <p className="text-text-light dark:text-gray-300 font-medium pb-2">{field.label}</p>
              <div className="relative">
                <select 
                  name={field.name}
                  value={(filters as any)[field.name]}
                  onChange={handleChange}
                  className="w-full rounded-lg bg-white dark:bg-card-dark border-gray-300 dark:border-gray-700 h-14 px-4 appearance-none focus:ring-2 focus:ring-primary text-gray-900 dark:text-white"
                >
                  <option className="bg-white dark:bg-card-dark text-gray-500" value="">
                    Seleccionar {field.label}
                  </option>
                  {field.options.map(opt => (
                    <option key={opt} value={opt} className="bg-white dark:bg-card-dark text-gray-900 dark:text-white">
                      {opt}
                    </option>
                  ))}
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
              </div>
            </label>
          </div>
        ))}
      </main>

      <footer className="px-4 py-6 space-y-4 border-t border-gray-200 dark:border-gray-800 bg-background-light dark:bg-background-dark mt-auto">
        <button onClick={handleSearch} className="w-full bg-primary text-white font-bold py-4 rounded-lg shadow-md hover:bg-primary-alt transition-colors">
          Buscar
        </button>
        <button onClick={handleReset} className="w-full text-primary font-medium py-2 hover:bg-primary/5 rounded-lg">
          Limpiar Filtros
        </button>
      </footer>
    </div>
  );
};

export default SearchMotherboard;