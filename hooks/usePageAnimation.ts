import { useState, useEffect } from 'react';

export const usePageAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation on mount
    setIsVisible(true);
  }, []);

  return isVisible;
};
