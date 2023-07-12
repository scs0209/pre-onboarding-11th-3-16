import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';

import { getRepoInfo } from '@/api/github';
import { Repo, RepoState } from '@/types/Repo';

interface Props {
  children: ReactNode;
}

const RepoContext = createContext({} as RepoState);

export const useRepoContext = () => useContext(RepoContext);

export const RepoProvider: FC<Props> = ({ children }) => {
  const [repo, setRepo] = useState<Repo | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const fetchData = async () => {
    setLoading(true);
    try {
      const data = await getRepoInfo();

      console.log(data);
      setRepo(data);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const value = { repo, loading, error };

  return <RepoContext.Provider value={value}>{children}</RepoContext.Provider>;
};
