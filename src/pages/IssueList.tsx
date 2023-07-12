import { useIssuesContext } from '@/context/IssueContext';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { Loading } from '@/styles/DataLoader';
import { ListContainer } from '@/styles/IssueList';
import { Issue } from '@/types/Issue';

import AdBanner from '../components/AdBanner/AdBanner';
import DataLoader from '../components/DataLoader/DataLoader';
import IssueItem from '../components/IssueList/IssueItem';

const IssueListPage = () => {
  const { data: issues, loading, error, requestMoreData } = useIssuesContext();

  useInfiniteScroll(requestMoreData);

  return (
    <DataLoader data={issues} loading={false} error={error}>
      {(issues) => (
        <ListContainer>
          {issues?.map((issue: Issue, index: number) => (
            <li key={issue.id}>
              <IssueItem issue={issue} />
              {index === 3 && <AdBanner />}
            </li>
          ))}
          {loading && <Loading>Loading...</Loading>}
        </ListContainer>
      )}
    </DataLoader>
  );
};

export default IssueListPage;
