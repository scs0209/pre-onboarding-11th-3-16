import React, { createContext, FC, ReactNode, useContext, useState } from 'react';

import { IssuesState } from '@/types/Issue';

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
