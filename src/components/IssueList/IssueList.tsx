import { useEffect } from 'react';

import { getIssues } from '@/api/github';
import { useIssuesContext } from '@/context/IssueContext';

import AdBanner from '../AdBanner/AdBanner';
import IssueItem from './IssueItem';

const IssueList = () => {
  const { issues, setIssues } = useIssuesContext();

  useEffect(() => {
    async function fetchIssues() {
      const fetchedIssues = await getIssues();

      setIssues(fetchedIssues);
    }
    fetchIssues();
  }, []);

  return (
    <>
      <h1>React Issues</h1>
      <ul>
        {issues.map((issue: any, index) => (
          <li key={issue.id}>
            <IssueItem issue={issue} />
            {index === 4 && <AdBanner />}
          </li>
        ))}
      </ul>
    </>
  );
};

export default IssueList;
