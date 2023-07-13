import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getIssues } from '@/api/github';
import { setData, setError, setLoading } from '@/redux/slice/issueSlice';
import { RootState } from '@/redux/store';
import { IssuesState } from '@/types/Issue';

interface Props {
  children: ReactNode;
}

const IssuesContext = createContext({} as IssuesState);

export const useIssuesContext = () => useContext(IssuesContext);

export const IssuesProvider: FC<Props> = ({ children }) => {
  const [page, setPage] = useState(1);
  const dispatch = useDispatch();
  const issuesState = useSelector((state: RootState) => state.issues);

  const fetchData = async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const newIssues = await getIssues(page);

      dispatch(setData({ newIssues, prevData: issuesState.data }));
    } catch (err) {
      dispatch(setError(err));
    }

    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const requestMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <IssuesContext.Provider value={{ ...issuesState, requestMoreData }}>
      {children}
    </IssuesContext.Provider>
  );
};

// export const IssuesProvider: FC<Props> = ({ children }) => {
//   const [page, setPage] = useState(1);

//   const fetchFunction = async (previousData: Issue[] | null) => {
//     const newIssues = await getIssues(page);

//     if (previousData) {
//       return [...previousData, ...newIssues];
//     } else {
//       return newIssues;
//     }
//   };

//   const fetchState = useFetch<Issue[]>(fetchFunction, [page]);
//   const { data, loading, error } = fetchState;

//   const requestMoreData = () => {
//     setPage((prevPage) => prevPage + 1);
//   };

//   const value = {
//     data,
//     loading,
//     error,
//     requestMoreData,
//   };

//   return <IssuesContext.Provider value={value}>{children}</IssuesContext.Provider>;
// };
