import { useEffect, useState } from 'react';

import { useIssuesContext } from '@/context/IssueContext';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { useIssueFetch } from '@/hooks/useIssuesFetch';
import { ListContainer } from '@/styles/IssueList';

import AdBanner from '../AdBanner/AdBanner';
import IssueItem from './IssueItem';

const IssueList = () => {
  const { issues } = useIssuesContext();
  const { fetchData, loading, error } = useIssueFetch();
  const [page, setPage] = useState(1);

  const requestMoreData = () => {
    setPage((prevPage) => prevPage + 1);
  };

  useInfiniteScroll(requestMoreData);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (page > 1) fetchData('', page);
  }, [page]);

  return (
    <>
      <h1>React Issues</h1>
      <ListContainer>
        {issues.map((issue: any, index) => (
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
