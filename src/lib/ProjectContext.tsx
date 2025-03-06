'use client';

import React, { createContext, useContext, useState } from 'react';

type ProjectContextType = {
  categories: string[];
  setCategories: (categories: string[]) => void;
};

const ProjectContext = createContext<ProjectContextType>({
  categories: [],
  setCategories: () => {},
});

export const ProjectContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [categories, setCategories] = useState<string[]>([]);

  return (
    <ProjectContext.Provider value={{ categories, setCategories }}>
      {children}
    </ProjectContext.Provider>
  );
};

export const useProjectContext = () => {
  const context = useContext(ProjectContext);
  if (!context) {
    throw new Error('useProjectContext must be used within a ProjectContextProvider');
  }
  return context;
}; 