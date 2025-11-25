import React from 'react';
import { useNavigate } from 'react-router-dom';

const CameraSearch: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen flex-col bg-black">
      {/* Header Overlay */}
      <header className="absolute top-0 w-full z-10 flex items-center justify-between p-6 text-white">
        <button onClick={() => navigate(-1)} className="p-2 -ml-2 rounded-full bg-black/20 backdrop-blur-md">
          <span className="material-symbols-outlined text-3xl">arrow_back_ios_new</span>
        </button>
        <h1 className="text-lg font-bold">Búsqueda por Cámara</h1>
        <div className="w-9"></div>
      </header>

      {/* Main Viewfinder */}
      <main className="relative flex-grow flex items-center justify-center overflow-hidden">
        {/* Simulated Camera Feed */}
        <img 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtveW8aMHKw_KbYu33tlhjs07W3o44mHVEkc6vFufSDGIYWgQ4SFkmot2Mtvm1cj97ZdF-lyaNV2K2M4xpgZoimm4KudFRZxqKH72MjjjtucAFGWIRk0n0IhlEUlHgMVYuBxgBINjhTZ6xEReGukMrETNfg8AmFSf9u0vot4ZIrtjfsNNttRezFtZPSWn2C69fY74OaBoUClQAgWjOCZOu2rRRdF_P5sXAxbwoSvll7Nso6rA1fYFG9yW4EXKMT0wXH4HL6f-LawI"
          alt="Camera Feed"
          className="absolute inset-0 w-full h-full object-cover opacity-80"
        />
        
        {/* Overlay UI */}
        <div className="absolute top-24 text-center w-full px-6">
           <p className="text-white/90 text-sm font-medium bg-black/30 backdrop-blur-sm py-2 px-4 rounded-full inline-block">
            Enfoca el componente que deseas buscar
          </p>
        </div>

        {/* Scan Frame */}
        <div className="relative w-64 h-64 border-2 border-white/50 rounded-3xl">
          <div className="absolute -top-1 -left-1 w-8 h-8 border-t-4 border-l-4 border-white rounded-tl-xl"></div>
          <div className="absolute -top-1 -right-1 w-8 h-8 border-t-4 border-r-4 border-white rounded-tr-xl"></div>
          <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b-4 border-l-4 border-white rounded-bl-xl"></div>
          <div className="absolute -bottom-1 -right-1 w-8 h-8 border-b-4 border-r-4 border-white rounded-br-xl"></div>
          
          {/* Scanning Animation */}
          <div className="absolute top-0 left-0 w-full h-1 bg-primary/80 shadow-[0_0_15px_rgba(67,97,238,0.8)] animate-[scan_2s_ease-in-out_infinite]"></div>
        </div>
      </main>

      {/* Controls */}
      <footer className="bg-black text-white p-8 pb-10">
        <div className="flex justify-around items-center">
          <button className="flex flex-col items-center space-y-1 opacity-80 hover:opacity-100">
            <div className="p-3 bg-white/10 rounded-full">
               <span className="material-symbols-outlined text-2xl">photo_library</span>
            </div>
            <span className="text-xs font-medium">Galería</span>
          </button>
          
          <button onClick={() => navigate('/results')} className="w-20 h-20 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.3)] active:scale-95 transition-transform">
            <div className="w-16 h-16 bg-transparent border-4 border-primary rounded-full"></div>
          </button>
          
          <button className="flex flex-col items-center space-y-1 opacity-80 hover:opacity-100">
             <div className="p-3 bg-white/10 rounded-full">
              <span className="material-symbols-outlined text-2xl">flash_on</span>
            </div>
            <span className="text-xs font-medium">Flash</span>
          </button>
        </div>
      </footer>
      <style>{`
        @keyframes scan {
          0% { top: 0; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { top: 100%; opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default CameraSearch;