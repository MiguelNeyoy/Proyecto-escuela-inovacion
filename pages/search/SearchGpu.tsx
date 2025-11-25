import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';

const SearchGpu: React.FC = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    brand: '',
    chipset: '',
    vram: '',
    interface: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    navigate('/results', { state: filters });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-display">
      <TopBar title="Tarjeta Gráfica" />
      
      <main className="flex-1 flex flex-col p-6 space-y-6">
        <div>
          <label className="block text-sm font-medium text-text-light dark:text-white mb-2">Marca</label>
          <div className="relative">
            <select 
              name="brand"
              value={filters.brand}
              onChange={handleChange}
              className="w-full appearance-none pl-4 pr-10 py-3 bg-white dark:bg-card-dark text-text-light dark:text-white border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary"
            >
              <option value="">Seleccionar marca</option>
              <option value="NVIDIA">NVIDIA</option>
              <option value="AMD">AMD</option>
              <option value="Intel">Intel</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-light dark:text-white mb-2">Chipset</label>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">memory</span>
            <input
              name="chipset"
              value={filters.chipset}
              onChange={handleChange}
              className="w-full pl-10 pr-4 py-3 bg-white dark:bg-card-dark text-text-light dark:text-white border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary"
              placeholder="Ej: RTX 3080"
              type="text"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-light dark:text-white mb-2">Memoria VRAM (GB)</label>
          <div className="relative">
            <select 
              name="vram"
              value={filters.vram}
              onChange={handleChange}
              className="w-full appearance-none pl-4 pr-10 py-3 bg-white dark:bg-card-dark text-text-light dark:text-white border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary"
            >
              <option value="">Seleccionar memoria</option>
              <option value="8GB">8 GB</option>
              <option value="12GB">12 GB</option>
              <option value="16GB">16 GB</option>
              <option value="24GB">24 GB</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-text-light dark:text-white mb-2">Interfaz</label>
          <div className="relative">
            <select 
              name="interface"
              value={filters.interface}
              onChange={handleChange}
              className="w-full appearance-none pl-4 pr-10 py-3 bg-white dark:bg-card-dark text-text-light dark:text-white border-gray-200 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary"
            >
              <option value="">Seleccionar interfaz</option>
              <option value="PCIe 4.0">PCIe 4.0</option>
              <option value="PCIe 5.0">PCIe 5.0</option>
            </select>
            <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
          </div>
        </div>

        <button
          onClick={handleSearch}
          className="w-full bg-primary text-white font-bold py-4 rounded-lg hover:bg-opacity-90 transition-colors mt-8 shadow-lg"
        >
          Buscar
        </button>
      </main>
    </div>
  );
};

export default SearchGpu;