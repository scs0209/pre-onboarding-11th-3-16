import React, { createContext, FC, ReactNode, useContext, useState } from 'react';

import { getIssues } from '@/api/github';
import { useDataFetcher } from '@/hooks/useDataFetch';
import { setData, setError, setLoading } from '@/redux/slice/issueSlice';
import { Issue, IssuesState } from '@/types/Issue';

interface Props {
  children: ReactNode;
}

const IssuesContext = createContext({} as IssuesState);

export const useIssuesContext = () => useContext(IssuesContext);

export const IssuesProvider: FC<Props> = ({ children }) => {
  const [page, setPage] = useState(1);

  const fetchFunction = async (prevData: Issue[]) => {
    const newIssues = await getIssues(page);

    if (prevData) {
      return { prevData, newIssues };
    } else {
      return newIssues;
    }
  };

  const issuesState = useDataFetcher<IssuesState>(
    fetchFunction,
    { reducer: 'issues', setLoading, setError, setData },
    [page],
  );

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
