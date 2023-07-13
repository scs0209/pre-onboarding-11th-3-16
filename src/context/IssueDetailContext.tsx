import React, { createContext, FC, ReactNode, useContext } from 'react';

import { getIssueDetail } from '@/api/github';
import { useDataFetcher } from '@/hooks/useDataFetch';
import { setData, setError, setLoading } from '@/redux/slice/issueDetailSlice';
import { IssueDetailState } from '@/types/Issue';

interface Props {
  children: ReactNode;
  issueNumber: number;
}

const IssueDetailContext = createContext({} as IssueDetailState);

export const useIssueDetailContext = () => useContext(IssueDetailContext);

export const IssueDetailProvider: FC<Props> = ({ children, issueNumber }) => {
  const fetchFunction = () => getIssueDetail(issueNumber);
  const issuesDetailState = useDataFetcher<IssueDetailState>(
    fetchFunction,
    {
      reducer: 'issueDetail',
      setLoading,
      setError,
      setData,
    },
    [issueNumber],
  );

  return (
    <IssueDetailContext.Provider value={issuesDetailState}>{children}</IssueDetailContext.Provider>
  );
};

// export const IssueDetailProvider: FC<Props> = ({ children, issueNumber }) => {
//   const { data, loading, error } = useFetch<Issue>(
//     () => getIssueDetail(issueNumber),
//     [issueNumber],
//   );

//   const value = { data, loading, error };

//   return <IssueDetailContext.Provider value={value}>{children}</IssueDetailContext.Provider>;
// };
