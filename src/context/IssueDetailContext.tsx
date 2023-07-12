import React, { createContext, FC, ReactNode, useContext, useState } from 'react';

import { getIssueDetail } from '@/api/github';
import { Issue, IssueDetailState } from '@/types/Issue';

interface Props {
  children: ReactNode;
}

const IssueDetailContext = createContext({} as IssueDetailState);

export const useIssueDetailContext = () => useContext(IssueDetailContext);

export const IssueDetailProvider: FC<Props> = ({ children }) => {
  const [issueDetail, setIssueDetail] = useState<Issue | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  const updateIssueDetail = async (issueNumber: number) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getIssueDetail(issueNumber);

      setIssueDetail(data);
    } catch (err: any) {
      setError(err);
    }
    setLoading(false);
  };

  const value = { issueDetail, loading, error, updateIssueDetail };

  return <IssueDetailContext.Provider value={value}>{children}</IssueDetailContext.Provider>;
};
