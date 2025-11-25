import React, { useState, useEffect } from 'react';
import TopBar from '../components/TopBar';
import { PageContainer } from '../components/PageContainer';

const Coupons: React.FC = () => {
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => setCardsVisible(true), 100);
  }, []);

  return (
    <PageContainer className="flex flex-col min-h-screen bg-background-light dark:bg-background-dark font-body">
      <TopBar title="Cupones" />
      
      {/* Chips */}
      <div className="flex gap-3 px-4 py-2 overflow-x-auto no-scrollbar">
        {['Todos', 'Tarjetas Gráficas', 'Procesadores', 'Monitores'].map((label, i) => (
          <Chip key={label} label={label} active={i === 0} index={i} />
        ))}
      </div>

      <div className="flex flex-col gap-4 p-4">
        <CouponCard 
          discount="-15% OFF" 
          desc="En tarjetas gráficas seleccionadas" 
          code="GPU2024" 
          expiry="Vence en 3 días"
          logo="https://lh3.googleusercontent.com/aida-public/AB6AXuDlDYkpLZV8rJsEPCB6zrJLeW9m0gkor88lpEnKamCVsWbEu7DHk3ghW1MJDdqugRXNInQyghqvpEbr81G54MZfYEU5oyx8V_tXl3GhDUNThFZ5tj5Ylsm2J42iLoxsPPKmBe0tH73Fpy9givaL6KM_AFXuIq3xClmm4YvQbxUVXoZNO-uUb7jwmBxG8FK5xIjW-0YLEvnA0I9kaDDFZqF-dylnrgqxirXJiB40Rp96dZ-YbnSZVxWZa8uukCldUv-0YCc_XtR7LW0"
          visible={cardsVisible}
          index={0}
        />
         <CouponCard 
          discount="$20 OFF" 
          desc="Ahorra en Procesadores Intel Core i7" 
          code="INTEL20" 
          expiry="Expira: 31/12/24"
          logo="https://lh3.googleusercontent.com/aida-public/AB6AXuBQPg3m7Dtvc5J2TsYzC4FEUO4bYcsOrdGjNaHjqt52TqE-vB8c3rMzvuzX_zNraY2Vaom68-E077Gx9uDhdWn4kMYfHf3JYQJbJLPJCF5PfjcTx4bpJzx8gxuW2NkgseDHWXfW_KmN383jot-QNZvuAqKW7CKfbVF5WXRvWyHGjzgQKZdveTJ8quuLzY7i8T5QRXLKEcNy4c3yRucUe_fSeVHveSPcTO0AFFnx7OTsGdci9e16TY5joscn3-1ZI3-6r13ngCMzVfI"
          visible={cardsVisible}
          index={1}
        />
        <div className="flex flex-col items-center justify-center gap-4 rounded-xl bg-white dark:bg-card-dark p-8 mt-4 text-center animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'backwards' }}>
          <div className="flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 size-16">
            <span className="material-symbols-outlined text-3xl text-gray-500">local_activity</span>
          </div>
          <div>
            <p className="text-base font-semibold text-text-light dark:text-white">No hay más cupones</p>
            <p className="text-sm text-gray-500">Vuelve más tarde para ver nuevas ofertas.</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

const Chip: React.FC<{ label: string, active?: boolean, index?: number }> = ({ label, active, index = 0 }) => (
  <button 
    className={`flex h-8 shrink-0 items-center justify-center rounded-lg px-4 text-sm font-medium transition-colors ${active ? 'bg-primary text-white' : 'bg-gray-200 dark:bg-gray-800 text-text-light dark:text-white'}`}
    style={{ animation: `slideInLeft 0.4s ease-out ${index * 0.08}s backwards` }}
  >
    {label}
  </button>
);

const CouponCard: React.FC<{ discount: string, desc: string, code: string, expiry: string, logo: string, visible: boolean, index: number }> = ({ discount, desc, code, expiry, logo, visible, index }) => (
  <div className="flex flex-col gap-3 rounded-xl bg-white dark:bg-card-dark p-4 shadow-sm border border-gray-100 dark:border-gray-800" style={{
    animation: visible ? `slideInUp 0.5s ease-out ${index * 0.15}s backwards` : 'none'
  }}>
    <div className="flex items-center gap-3">
      <img className="size-10 rounded-lg object-contain bg-white p-1 border border-gray-100" src={logo} alt="Logo" />
      <div className="flex flex-col">
        <p className="text-text-light dark:text-white text-base font-semibold leading-tight">{discount}</p>
        <p className="text-gray-500 dark:text-gray-400 text-sm">{desc}</p>
      </div>
    </div>
    <div className="flex items-center justify-between rounded-lg border border-dashed border-primary/50 bg-primary/5 dark:bg-primary/10 p-3">
      <p className="text-primary dark:text-white font-semibold tracking-wider font-mono">{code}</p>
      <button className="flex items-center justify-center gap-2 rounded-lg h-8 px-3 bg-primary text-white text-sm font-medium hover:bg-primary-alt">
        <span className="material-symbols-outlined text-base">content_copy</span>
        Copiar
      </button>
    </div>
    <div className="flex items-center justify-between text-sm">
      <p className="text-orange-500 font-medium">{expiry}</p>
      <button className="text-primary hover:underline">Ver condiciones</button>
    </div>
  </div>
);

export default Coupons;