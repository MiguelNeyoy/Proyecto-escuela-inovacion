import React from 'react';
import TopBar from '../components/TopBar';

const Contact: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background-light dark:bg-background-dark font-display p-4">
      <TopBar title="Contáctanos" />
      
      <main className="flex-1 flex flex-col justify-center max-w-lg mx-auto w-full">
        <div className="space-y-4 mb-6">
          <ContactInfo icon="email" text="soporte@componentes.com" />
          <ContactInfo icon="call" text="+1 (555) 123-4567" />
        </div>

        <h2 className="text-xl font-bold text-center text-text-light dark:text-white mb-4">O envíanos un mensaje</h2>
        
        <form className="space-y-4">
          <Input label="Nombre" placeholder="Ingresa tu nombre" />
          <Input label="Correo Electrónico" placeholder="tu@email.com" type="email" />
          
          <div>
            <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">Tu Mensaje</label>
            <textarea 
              rows={4} 
              className="w-full bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-text-light dark:text-white focus:ring-primary focus:border-primary"
              placeholder="Escribe tu mensaje aquí..."
            ></textarea>
          </div>

          <button className="w-full bg-primary text-white font-bold py-3 rounded-lg shadow-md hover:bg-blue-600 transition-colors">
            Enviar Mensaje
          </button>
        </form>

        <div className="pt-8">
          <h3 className="text-xl font-bold text-center text-text-light dark:text-white mb-4">Síguenos</h3>
          <div className="flex justify-center space-x-6">
            <SocialButton icon="public" />
            <SocialButton icon="alternate_email" />
            <SocialButton icon="share" />
          </div>
        </div>
      </main>
    </div>
  );
};

const ContactInfo: React.FC<{ icon: string, text: string }> = ({ icon, text }) => (
  <div className="flex items-center p-4 bg-white dark:bg-card-dark rounded-lg shadow-sm">
    <div className="w-10 h-10 flex items-center justify-center bg-blue-50 dark:bg-zinc-800 rounded-lg mr-4">
      <span className="material-symbols-outlined text-primary">{icon}</span>
    </div>
    <span className="text-text-light dark:text-white">{text}</span>
  </div>
);

const Input: React.FC<{ label: string, placeholder: string, type?: string }> = ({ label, placeholder, type = "text" }) => (
  <div>
    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{label}</label>
    <input 
      type={type} 
      className="w-full bg-white dark:bg-card-dark border border-gray-200 dark:border-gray-700 rounded-lg p-3 text-text-light dark:text-white focus:ring-primary focus:border-primary"
      placeholder={placeholder}
    />
  </div>
);

const SocialButton: React.FC<{ icon: string }> = ({ icon }) => (
  <button className="w-12 h-12 flex items-center justify-center bg-white dark:bg-card-dark rounded-full shadow-sm text-gray-700 dark:text-gray-200 hover:text-primary transition-colors">
    <span className="material-symbols-outlined">{icon}</span>
  </button>
);

export default Contact;