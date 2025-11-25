import React from 'react';
import { useNavigate } from 'react-router-dom';

interface TopBarProps {
  title: string;
  showBack?: boolean;
  rightAction?: React.ReactNode;
}

const TopBar: React.FC<TopBarProps> = ({ title, showBack = true, rightAction }) => {
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 z-10 flex items-center bg-background-light dark:bg-background-dark p-4 pb-2 justify-between">
      {showBack ? (
        <button 
          onClick={() => navigate(-1)}
          className="flex size-10 shrink-0 items-center justify-center text-text-light dark:text-white rounded-full hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
        >
          <span className="material-symbols-outlined text-2xl">arrow_back</span>
        </button>
      ) : (
        <div className="size-10" />
      )}
      
      <h1 className="text-lg font-bold leading-tight flex-1 text-center text-text-light dark:text-white truncate px-2">
        {title}
      </h1>
      
      <div className="flex size-10 items-center justify-center">
        {rightAction}
      </div>
    </div>
  );
};

export default TopBar;