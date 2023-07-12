import { useEffect } from 'react';

import { useIssuesContext } from '@/context/IssueContext';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { ListContainer } from '@/styles/IssueList';
import { Issue } from '@/types/Issue';

import AdBanner from '../AdBanner/AdBanner';
import IssueItem from './IssueItem';

const IssueList = () => {
  const { issues, fetchData, loading, error, requestMoreData } = useIssuesContext();

  useInfiniteScroll(requestMoreData);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ListContainer>
        {issues.map((issue: Issue, index: number) => (
          <li key={issue.id}>
            <IssueItem issue={issue} />
            {index === 3 && <AdBanner />}
          </li>
        ))}
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
      </ListContainer>
    </>
  );
};

export default IssueList;
