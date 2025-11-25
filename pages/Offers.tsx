import React from 'react';
import TopBar from '../components/TopBar';

const Offers: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-body bg-background-light dark:bg-background-dark">
      <TopBar 
        title="Ofertas" 
        rightAction={<span className="material-symbols-outlined text-text-light dark:text-white">shopping_cart</span>}
      />
      
      {/* Search & Filter */}
      <div className="px-4 pb-3">
        <div className="flex items-center bg-white dark:bg-zinc-800 rounded-xl px-4 py-2 shadow-sm border border-zinc-100 dark:border-zinc-700">
          <span className="material-symbols-outlined text-zinc-400 mr-2">search</span>
          <input 
            type="text" 
            placeholder="Buscar GPUs, CPUs, RAM..." 
            className="w-full bg-transparent border-none focus:ring-0 text-zinc-800 dark:text-white p-0"
          />
        </div>
      </div>
      
      <div className="flex gap-2 px-4 pb-4 overflow-x-auto no-scrollbar">
        {['Todo', 'GPUs', 'CPUs', 'RAM', 'SSD', 'Motherboards'].map((tag, i) => (
          <button 
            key={tag}
            className={`flex h-9 shrink-0 items-center justify-center rounded-full px-4 text-sm font-medium ${i === 0 ? 'bg-primary/20 text-primary' : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300'}`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <main className="grid grid-cols-2 gap-4 p-4">
        <OfferCard 
          title="NVIDIA GeForce RTX 4070" 
          price="$549.99" 
          oldPrice="$649.99" 
          discount="-15%" 
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuCcly8dhv53qL5fEYKrRI0g0t-yY-X1Y3FlIc_3Bi4HedFpPuDRs0__M5RAKF7sDKCVdwedQcaoCvrc7QiucITQzw68UcXUUlTBWObyJoPlXaX1OVcGwEPtZ_9gOmZWI1Dv94MAZrw9fWyN7SFnxYUe1ZruwMy-QG3SY-0o0clE3UysJocnB-U0jIeDifxaArwM3f4JxPPUkdC-8nK349O2xVKsRaJ6rOzZjGgynk6tyHKgtenOmyoMdrpnn20M-QREpWjgC5mMV4c" 
        />
        <OfferCard 
          title="AMD Ryzen 7 7800X3D" 
          price="$399.99" 
          oldPrice="$499.99" 
          discount="-20%" 
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuDlQ86rkwOIEolvL4l9KTkX14EYLXxud93829QfXhtdj8QQu2Q0Cb5ZFhxmwBVgzSsNJLor2zsfx6LEtKochkUa8adrulqtOqL1dzKPfPSoeOzpLSumyrOZmn3PZR1Dnj0dglNUuu5cURfc5jSVi6sLonaE-pB90tpeL3lSzMEgNckR60UcA2fsTZUMbjhhLcucM-deWbtGgBcFVJJS00ama2u_w5P4YveD7ZNY9yBLMSVwJlhrM1TUE8AWll7w5_Ups-Bh4bf3NaY" 
        />
        <OfferCard 
          title="Corsair Vengeance DDR5" 
          price="$99.99" 
          oldPrice="$134.99" 
          discount="-25%" 
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuDZaB3UCWbyMVJZbiYNHL2DQn57O_KXQKjyndl-leOCBZnESDtQmrTO47ElAdc0ScNxvnXnVzZXsDx3sSb_91DlkXy9Ux8OnJbmdIIwPc7QXM5pALg53DVFccEgrWZeNSJRR1wMNaEYnmgnvskU0dEmrpc-atTJSSb6qzfIxRdi_3Av1gfZ9K3dfkYrkO8Va85nD-W3yul7F9cQk5uTO493lFjyyYr3B8ROC38Pjukp1c_ddrTfXCYQQBxuTl9GdECGSHLW_LQXzUo" 
        />
         <OfferCard 
          title="Samsung 980 Pro 1TB" 
          price="$89.99" 
          oldPrice="$99.99" 
          discount="-10%" 
          img="https://lh3.googleusercontent.com/aida-public/AB6AXuDEeiqIPW-vv2J10gkZJd9MiO4KuNgVio6W_cBRak7g1v4PfvNQP5pz2mBEz0j9DLoYTCq6NkAocYFHtgL3osM4UQ1UF2JUvaCMrkObRSVpJVArLEd8vMF_ZTpi4sdQ8EffsUNYcEx5I2NtrdDt_uicl1vB7ApHfunKEwjtVjJFZQXr_pAwS1uw6OUQh3bfR_KNGF2boUfftrf1e4lITzHx8-aLBwf5Hn6DuE4LuiXphvPmbfwcP8C5x86utfRpLaTYu5wwMmmUKJg" 
        />
      </main>
    </div>
  );
};

const OfferCard: React.FC<{ title: string, price: string, oldPrice: string, discount: string, img: string }> = ({ title, price, oldPrice, discount, img }) => (
  <div className="flex flex-col gap-2 group cursor-pointer">
    <div className="relative w-full aspect-square rounded-xl bg-white dark:bg-zinc-800 overflow-hidden">
      <img src={img} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
      <div className="absolute top-2 right-2 flex h-6 items-center justify-center rounded-full bg-orange-500 px-2">
        <p className="text-xs font-bold text-white">{discount}</p>
      </div>
    </div>
    <div className="flex flex-col px-1">
      <p className="text-sm font-semibold leading-tight text-zinc-800 dark:text-white line-clamp-2 min-h-[2.5rem]">{title}</p>
      <div className="flex items-baseline gap-2 mt-1">
        <p className="text-lg font-bold text-primary">{price}</p>
        <p className="text-xs text-zinc-400 line-through">{oldPrice}</p>
      </div>
    </div>
  </div>
);

export default Offers;