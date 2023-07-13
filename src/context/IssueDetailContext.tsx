import React, { createContext, FC, ReactNode, useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getIssueDetail } from '@/api/github';
import { useFetch } from '@/hooks/useFetch';
import { setData, setError, setLoading } from '@/redux/slice/issueDetailSlice';
import { RootState } from '@/redux/store';
import { Issue, IssueDetailState } from '@/types/Issue';

interface Props {
  children: ReactNode;
  issueNumber: number;
}

const IssueDetailContext = createContext({} as IssueDetailState);

export const useIssueDetailContext = () => useContext(IssueDetailContext);

export const IssueDetailProvider: FC<Props> = ({ children, issueNumber }) => {
  const issuesDetailState = useSelector((state: RootState) => state.issueDetail);
  const dispatch = useDispatch();

  const fetchData = async () => {
    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const issueDetailData = await getIssueDetail(issueNumber);

      dispatch(setData(issueDetailData));
    } catch (err) {
      dispatch(setError(err));
    }

    dispatch(setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, [issueNumber]);

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
