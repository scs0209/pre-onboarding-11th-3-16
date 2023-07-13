import React, { createContext, FC, ReactNode, useContext, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getRepoInfo } from '@/api/github';
import { useFetch } from '@/hooks/useFetch';
import { setData, setError, setLoading } from '@/redux/slice/repoSlice';
import { RootState } from '@/redux/store';
import { Repo, RepoState } from '@/types/Repo';

interface Props {
  children: ReactNode;
}

const RepoContext = createContext({} as RepoState);

export const useRepoContext = () => useContext(RepoContext);

export const RepoProvider: FC<Props> = ({ children }) => {
  const repoState = useSelector((state: RootState) => state.repo);
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const repoInfo = await getRepoInfo();

      dispatch(setData(repoInfo));
    } catch (err) {
      dispatch(setError(err));
    }

    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <RepoContext.Provider value={repoState}>{children}</RepoContext.Provider>;
};

// export const RepoProvider: FC<Props> = ({ children }) => {
//   const { data, loading, error } = useFetch<Repo>(getRepoInfo);

//   const value = { data, loading, error };

//   return <RepoContext.Provider value={value}>{children}</RepoContext.Provider>;
// };
