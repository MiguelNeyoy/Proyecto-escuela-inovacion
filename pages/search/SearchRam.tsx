import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TopBar from '../../components/TopBar';

const SearchRam: React.FC = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    generation: '',
    capacity: '',
    brand: '',
    minPrice: '',
    maxPrice: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    console.log('Searching RAM with:', filters);
    navigate('/results', { state: filters });
  };

  const handleReset = () => {
    setFilters({
      generation: '',
      capacity: '',
      brand: '',
      minPrice: '',
      maxPrice: ''
    });
  };

  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-display">
      <TopBar title="Memoria RAM" />
      
      <main className="flex-grow space-y-6 p-6">
        <div className="space-y-2">
          <label className="font-medium text-text-light dark:text-text-dark">Generación</label>
          <div className="relative">
             <select 
               name="generation"
               value={filters.generation}
               onChange={handleChange}
               className="w-full rounded-lg border-none bg-card-light px-4 py-3 text-text-light focus:ring-2 focus:ring-primary dark:bg-card-dark dark:text-white appearance-none"
             >
              <option value="">Seleccionar generación</option>
              <option value="DDR5">DDR5</option>
              <option value="DDR4">DDR4</option>
              <option value="DDR3">DDR3</option>
            </select>
            <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-medium text-text-light dark:text-text-dark">Cantidad</label>
           <div className="relative">
            <select 
              name="capacity"
              value={filters.capacity}
              onChange={handleChange}
              className="w-full rounded-lg border-none bg-card-light px-4 py-3 text-text-light focus:ring-2 focus:ring-primary dark:bg-card-dark dark:text-white appearance-none"
            >
              <option value="">Seleccionar cantidad</option>
              <option value="8GB">8 GB</option>
              <option value="16GB">16 GB</option>
              <option value="32GB">32 GB</option>
              <option value="64GB">64 GB</option>
            </select>
             <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">expand_more</span>
          </div>
        </div>

        <div className="space-y-2">
          <label className="font-medium text-text-light dark:text-text-dark">Marca (opcional)</label>
          <input
            name="brand"
            value={filters.brand}
            onChange={handleChange}
            className="w-full rounded-lg border-none bg-card-light px-4 py-3 text-text-light focus:ring-2 focus:ring-primary dark:bg-card-dark dark:text-white"
            placeholder="Ej: Corsair, Kingston"
            type="text"
          />
        </div>

        <div className="space-y-2">
          <label className="font-medium text-text-light dark:text-text-dark">Rango de Precio</label>
          <div className="flex items-center space-x-3">
            <input
              name="minPrice"
              value={filters.minPrice}
              onChange={handleChange}
              className="w-full rounded-lg border-none bg-card-light px-4 py-3 text-center text-text-light focus:ring-2 focus:ring-primary dark:bg-card-dark dark:text-white"
              placeholder="Mín"
              type="number"
            />
            <span className="text-gray-400">-</span>
            <input
              name="maxPrice"
              value={filters.maxPrice}
              onChange={handleChange}
              className="w-full rounded-lg border-none bg-card-light px-4 py-3 text-center text-text-light focus:ring-2 focus:ring-primary dark:bg-card-dark dark:text-white"
              placeholder="Máx"
              type="number"
            />
          </div>
        </div>
      </main>

      <div className="mt-auto p-6 space-y-3">
        <button
          onClick={handleReset}
          className="w-full rounded-lg border border-primary text-primary py-4 font-semibold hover:bg-primary/5 active:scale-98"
        >
          Limpiar Filtros
        </button>
        <button
          onClick={handleSearch}
          className="w-full rounded-lg bg-primary py-4 font-semibold text-white transition-opacity hover:bg-opacity-90 active:scale-98 shadow-md"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchRam;