import React, { useState, useEffect } from 'react';

interface PageContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const PageContainer: React.FC<PageContainerProps> = ({ children, className = '' }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`${isVisible ? 'animate-page-enter' : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
};
