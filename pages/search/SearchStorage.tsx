import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';

const SearchStorage: React.FC = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    type: 'all',
    capacity: 1000,
    interface: ''
  });

  const handleSearch = () => {
    navigate('/results', { state: filters });
  };

  const handleReset = () => {
    setFilters({
      type: 'all',
      capacity: 1000,
      interface: ''
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-grotesk">
      <TopBar title="Buscar Almacenamiento" />
      
      <main className="flex-1 px-6 pt-4">
        <h3 className="text-text-light dark:text-white text-lg font-bold pb-4">
          Filtros de Búsqueda
        </h3>

        <div className="space-y-6">
          <label className="flex flex-col">
            <span className="text-text-light dark:text-gray-300 font-medium pb-2">Tipo</span>
            <div className="relative">
              <select 
                value={filters.type}
                onChange={(e) => setFilters({...filters, type: e.target.value})}
                className="w-full rounded-lg bg-card-light dark:bg-card-dark text-text-light dark:text-white border-gray-300 dark:border-gray-700 h-14 px-4 appearance-none focus:ring-2 focus:ring-primary"
              >
                <option value="all">Todos los tipos</option>
                <option value="hdd">HDD</option>
                <option value="ssd_sata">SSD SATA</option>
                <option value="ssd_nvme">SSD NVMe</option>
              </select>
              <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
            </div>
          </label>

          {/* Functional Slider */}
          <div>
            <div className="flex justify-between mb-2">
              <span className="text-text-light dark:text-gray-300 font-medium">Capacidad Mínima</span>
              <span className="text-primary font-bold">{filters.capacity < 1000 ? `${filters.capacity} GB` : `${(filters.capacity / 1000).toFixed(1)} TB`}</span>
            </div>
            <input 
              type="range" 
              min="250" 
              max="4000" 
              step="250"
              value={filters.capacity}
              onChange={(e) => setFilters({...filters, capacity: parseInt(e.target.value)})}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-primary"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>250 GB</span>
              <span>4 TB</span>
            </div>
          </div>

          <div className="pt-4">
            <span className="text-text-light dark:text-gray-200 font-medium block mb-3">Interfaz</span>
            <div className="flex flex-wrap gap-2">
              {['SATA III', 'PCIe 3.0', 'PCIe 4.0', 'PCIe 5.0'].map((label) => (
                <button 
                  key={label}
                  onClick={() => setFilters({...filters, interface: label === filters.interface ? '' : label})}
                  className={`px-4 py-2 text-sm font-medium rounded-full border transition-colors ${
                    filters.interface === label 
                      ? 'border-primary bg-primary/20 text-primary' 
                      : 'border-gray-300 dark:border-gray-600 bg-white dark:bg-card-dark text-text-light dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </main>

      <div className="p-6 mt-auto">
        <button onClick={handleSearch} className="w-full bg-primary text-white font-bold py-4 rounded-xl text-base shadow-lg hover:bg-primary-alt transition-colors">
          Buscar
        </button>
        <button onClick={handleReset} className="w-full mt-3 text-primary font-bold py-4 rounded-xl text-base hover:bg-primary/5 transition-colors">
          Restablecer Filtros
        </button>
      </div>
    </div>
  );
};

export default SearchStorage;