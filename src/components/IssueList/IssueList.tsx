import { useEffect, useState } from 'react';

import { getIssues } from '@/api/github';
import { useIssuesContext } from '@/context/IssueContext';

import AdBanner from '../AdBanner/AdBanner';
import IssueItem from './IssueItem';

const IssueList = () => {
  const { issues, setIssues } = useIssuesContext();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [page, setPage] = useState(1);

  const fetchData = async (query = '', page = 1) => {
    setLoading(true);
    setError(null);
    try {
      const newIssues = await getIssues(query, page);
      const updatedIssues = [...issues, ...newIssues];

      setIssues(updatedIssues);
    } catch (error: any) {
      setError(error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
      document.documentElement.offsetHeight
    )
      return;
    setPage((prevPage) => prevPage + 1);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (page > 1) fetchData('', page);
  }, [page]);

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
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
      </ul>
    </>
  );
};

export default IssueList;
