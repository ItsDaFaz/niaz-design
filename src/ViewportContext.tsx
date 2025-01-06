import React, { createContext, useEffect, useState } from 'react';

interface ViewportContextProps {
  isMobile: boolean;
}

const ViewportContext = createContext<ViewportContextProps | undefined>(undefined);

export const ViewportProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <ViewportContext.Provider value={{ isMobile }}>
      {children}
    </ViewportContext.Provider>
  );
};

export default ViewportContext;