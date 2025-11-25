import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { PageContainer } from '../components/PageContainer';

const Results: React.FC = () => {
  const [itemsVisible, setItemsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setItemsVisible(true), 100);
  }, []);

  return (
    <PageContainer className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-grotesk">
      <TopBar title="Resultados" />
      
      <main className="flex-1 px-4 py-2">
        <p className="py-3 text-sm text-gray-600 dark:text-gray-400 animate-slide-in-down">
          Mostrando 4 resultados
        </p>
        
        <div className="flex flex-col gap-4 pb-6">
          <ResultItem 
            title="Corsair Vengeance DDR5" 
            desc="16GB, DDR5, 6000MHz" 
            price="$129.99" 
            availability="Disponible en tienda local"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuBtr1iEbI-JT7-SZ7U_nBhJt_wHWS-aZseRWAolrNA-qYUCHx83O7Lu7GREXjNnpeiFtKZHlJ5TYD-9O_sPNNtiTBwFHgcdgFTTfSnRkfJnSEr6o1hktcOzvGpjCbquGNscub-GW7sYM3r2Eg_WUhKB5p3H4JRrbYoK9WftC56SOgDsQatBudIKFZRFR5PIlLA7dmKsOVHsPKz0_SULnJASxb8jTp1HdqwRueqEuRB7Gskl_lcxvzMYmYIrJ1kJPCwtB7oexKZr-pk"
            visible={itemsVisible}
            index={0}
          />
          <ResultItem 
            title="Kingston Fury Beast" 
            desc="32GB (2x16GB), DDR4, 3200MHz" 
            price="$95.50" 
            availability="Envío nacional"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuDoOiiMKNfTKe1xInLsKtSykwzcDfkntTtx_5HbpSBafhbSWzwd91DmuR78dXkj2EbTHsjWmFh0wptFKqd5BJ8Fo7xpaRk1VQe8YI_iGEmNF1jPuYgN9f8d7vcOM-vsFMNW_JhH_dFz0UEFXXHrdBRFmY98z-JVKVhFHw_hqZatQkvk-Jw70DTOzzFnMrmoIVHvOC5QZ-DomttBSaMCbErAnM1qP4F8lQv0JYzd76nWuo50YCi1EK2KIt1U-vbBcM5HwBggAfFFNkc"
            visible={itemsVisible}
            index={1}
          />
           <ResultItem 
            title="G.Skill Trident Z5 RGB" 
            desc="32GB, DDR5, 6400MHz" 
            price="$189.99" 
            availability="Disponible online"
            img="https://lh3.googleusercontent.com/aida-public/AB6AXuAqhNvoXl-cPI0xijFLtMnBThl2X7J4sj2GGPszoFHQwX8iM9il1F2FcJAAi81CrWseV0uSnvse6_L8cfwuxutokg7R4v5mUzj5iKRgAZO5BMh8Yi5r_nbIpq0zW24huQ-y9wstWG5sZv1mLd77ObkKpNyUhjjMaz5MX4LpjrU8rR5APGfMDH2LrIsedaUTL69vtdXG1C7hUAA8tWImrX4mdq5lMBwwR1C2Xn1bVJzqhiDAYKBg_Hx2Dq7vkcu-Y_-w-LPw-clV3ts"
            visible={itemsVisible}
            index={2}
          />
        </div>
      </main>
    </PageContainer>
  );
};

const ResultItem: React.FC<{ title: string, desc: string, price: string, availability: string, img: string, visible: boolean, index: number }> = ({ title, desc, price, availability, img, visible, index }) => (
  <div className="flex cursor-pointer gap-4 rounded-xl bg-white p-3 dark:bg-card-dark/50 hover:shadow-md transition-shadow" style={{
    animation: visible ? `slideInUp 0.5s ease-out ${index * 0.15}s backwards` : 'none'
  }}>
    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-gray-200 dark:bg-gray-700">
      <img className="h-full w-full object-cover" src={img} alt={title} />
    </div>
    <div className="flex flex-1 flex-col justify-between">
      <div>
        <p className="font-medium text-text-light dark:text-white leading-tight">{title}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{desc}</p>
      </div>
      <div className="flex flex-col">
        <p className="text-xs text-gray-500 dark:text-gray-400">{availability}</p>
        <p className="mt-1 font-bold text-primary text-lg">{price}</p>
      </div>
    </div>
  </div>
);

export default Results;