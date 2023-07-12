import React, { createContext, FC, ReactNode, useContext, useState } from 'react';

import { getIssueDetail } from '@/api/github';
import { useFetch } from '@/hooks/useFetch';
import { Issue, IssueDetailState } from '@/types/Issue';

interface Props {
  children: ReactNode;
  issueNumber: number;
}

const IssueDetailContext = createContext({} as IssueDetailState);

export const useIssueDetailContext = () => useContext(IssueDetailContext);

export const IssueDetailProvider: FC<Props> = ({ children, issueNumber }) => {
  const { data, loading, error } = useFetch<Issue>(
    () => getIssueDetail(issueNumber),
    [issueNumber],
  );

  const value = { data, loading, error };

  return <IssueDetailContext.Provider value={value}>{children}</IssueDetailContext.Provider>;
};
