import { IssuesState } from '@/types/Issue';
import React, { FC, ReactNode, createContext, useContext, useState } from 'react';

interface Props {
  children: ReactNode;
}

const IssuesContext = createContext({} as IssuesState);

export const useIssuesContext = () => useContext(IssuesContext);

export const IssuesProvider: FC<Props> = ({ children }) => {
  const [issues, setIssues] = useState<any[]>([]);

  const value = {
    issues,
    setIssues,
  };

  return <IssuesContext.Provider value={value}>{children}</IssuesContext.Provider>;
};
