import React from 'react';
import TopBar from '../components/TopBar';

const Trends: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-body">
      <TopBar title="Tendencias" />
      
      {/* Tabs */}
      <div className="sticky top-[56px] z-10 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-sm px-4 border-b border-gray-200 dark:border-gray-800">
        <div className="flex overflow-x-auto no-scrollbar gap-6">
          {['Todos', 'Procesadores', 'Tarjetas de Video', 'Placas Base', 'RAM'].map((tab, i) => (
             <button 
                key={tab}
                className={`flex-shrink-0 pb-3 pt-4 text-sm font-medium border-b-2 ${i === 0 ? 'border-primary text-text-light dark:text-white' : 'border-transparent text-gray-500'}`}
             >
               {tab}
             </button>
          ))}
        </div>
      </div>

      <main className="p-4 grid grid-cols-2 gap-4">
        <TrendCard 
          title="RTX 4080" 
          subtitle="Top 5 en Ventas" 
          icon="local_fire_department"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuAsaLTuNilGONj11CPpz4gSvyu7x3_JQSugAt5YSkfoRZZH9X5D8SiqW7J3XvF9m9VWnUCLn7Jrn6-NBhLV1MOrApeUR2s5Svb9yOTih4scCg8v_Xw89c9MKLvbGg9lspWLzvGX5moH98mmc2TvAagDzfrKU80QIRYkZFnxeSsoHzjJuJDQ0jdMeqqaFWGMvisiW7mZ3t2jNVCnLYhpEFPkIVlyQ5uZNmA923heXqlX-x0jMoSaRpaJBpWf6fsxj7wEUsL91iUjCqI" 
        />
        <TrendCard 
          title="Ryzen 7 7800X3D" 
          subtitle="+10k Vistas" 
          icon="trending_up"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuDDQLEMhATU4_Jjd7ABUGbGgYSv5tmA041GQ_Pz8HEzKXAd7-N2IBvIjFxO6HjzgnnUWDfWBKjD-hcBVN9y1b5pPdib5Bzdjh22to9BzLtzYrN3X3vyq3pHkZU2AsvGMDg6njv7oZzQ9_DQsTLlMPCpVJsfQ43j4CEQd_9aFZIDLszxBYR3aBJNwPZ9wDpEHmEA-sjMpWhUGElN-3Ceucvm6q3bRHg4Ntqc6vEJ8WbABt-EEWdvm2K2BNuXRsoHB55aG4yo06BVwaU" 
        />
         <TrendCard 
          title="Z790-E" 
          subtitle="Top 10" 
          icon="local_fire_department"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuBRLoeHfj88oiIvvJBod7qJhMLzqe3LSRnQwNKDzdBLDF7y-6MgUfT8Tq-qdGMcmp4845WUUMVkfHl4jM1RhiEs7RBzjfop40PaR4YVsUIjz7_BJHnsqdnp0PfEa747TKOG4mNwfQdQugqjl2lH12VgZyATD-UjD3t3BSv4_9aaIWh59o1ftO1oyrOfMUjgWZkkTPY4SUQ8hl1ZbwJffxvC-1XW3qYeJccnTemsUPwVUjq2QTMxwTL61EheWSWysgMDQ-3GVOc2HAc" 
        />
         <TrendCard 
          title="Samsung 980 Pro" 
          subtitle="Más Vendido" 
          icon="local_fire_department"
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuBQaSWhZ0u-M0S_oNG9k2aog-4V47Ouh9nqO-3S65KJ6pKDDFQVxZ1IfWYGJY8eQtmIEPOqvdcshf6PTyp2iIzqeO5HnalM59rz-rhtFrtI4Ue1OaDOT47PbxrgRgVEzzKtWDvZs-lBAlFmX0b0sHVwstTijGbAu8MqYippHlooPHgO2g1H0rn0xtK-5RAe276iF3Y2u8JVg8rpuTiSvtxFuqqapSy0Fq8_CvB8MRTE2AARwMBuYsxbHAb7W_ExPwZtv2f_p32_8qM" 
        />
      </main>
    </div>
  );
};

const TrendCard: React.FC<{ title: string, subtitle: string, icon: string, img: string }> = ({ title, subtitle, icon, img }) => (
  <div className="bg-white dark:bg-card-dark p-3 rounded-xl shadow-sm flex flex-col gap-3">
    <div className="w-full aspect-square rounded-lg bg-gray-100 overflow-hidden">
        <img src={img} alt={title} className="w-full h-full object-cover" />
    </div>
    <div>
      <p className="font-semibold text-text-light dark:text-white truncate">{title}</p>
      <div className="flex items-center gap-1 text-primary mt-1">
        <span className="material-symbols-outlined text-base">{icon}</span>
        <span className="text-xs font-bold">{subtitle}</span>
      </div>
    </div>
  </div>
);

export default Trends;