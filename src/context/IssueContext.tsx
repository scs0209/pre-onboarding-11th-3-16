import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

import { getIssues } from '@/api/github';
import { Issue, IssuesState } from '@/types/Issue';

interface Props {
  children: ReactNode;
}

const IssuesContext = createContext({} as IssuesState);

export const useIssuesContext = () => useContext(IssuesContext);

export const IssuesProvider: FC<Props> = ({ children }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async () => {
    setLoading(true);
    setError(null);
    const query = '';

    try {
      const newIssues = await getIssues(query, page);
      const updatedIssues = [...issues, ...newIssues];

      setIssues(updatedIssues);
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const requestMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const value = {
    issues,
    setIssues,
    fetchData,
    loading,
    error,
    requestMoreData,
  };

  return <IssuesContext.Provider value={value}>{children}</IssuesContext.Provider>;
};
