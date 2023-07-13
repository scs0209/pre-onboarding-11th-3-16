import React, { createContext, FC, ReactNode, useContext } from 'react';

import { getRepoInfo } from '@/api/github';
import { useDataFetcher } from '@/hooks/useDataFetch';
import { setData, setError, setLoading } from '@/redux/slice/repoSlice';
import { RepoState } from '@/types/Repo';

interface Props {
  children: ReactNode;
}

const RepoContext = createContext({} as RepoState);

export const useRepoContext = () => useContext(RepoContext);

export const RepoProvider: FC<Props> = ({ children }) => {
  const repoState = useDataFetcher<RepoState>(getRepoInfo, {
    reducer: 'repo',
    setLoading,
    setError,
    setData,
  });

  return <RepoContext.Provider value={repoState}>{children}</RepoContext.Provider>;
};

// export const RepoProvider: FC<Props> = ({ children }) => {
//   const { data, loading, error } = useFetch<Repo>(getRepoInfo);

//   const value = { data, loading, error };

//   return <RepoContext.Provider value={value}>{children}</RepoContext.Provider>;
// };
