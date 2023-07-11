import { getIssues } from '@/api/github';
import { useEffect, useState } from 'react';

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    async function fetchIssues() {
      const data = await getIssues();

      console.log(data);
      setIssues(data);
    }

    fetchIssues();
  }, []);

  return (
    <>
      <h1>React Issues</h1>
      <ul>
        {issues.map((issue: any) => (
          <li key={issue.id}>
            <a href={issue.html_url} target="_blank" rel="noopener noreferrer">
              {issue.title}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
};

export default IssueList;
