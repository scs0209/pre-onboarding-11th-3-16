import { useState } from 'react';

// import { getIssues } from '@/api/github';
// import { useIssuesContext } from '@/context/IssueContext';

// export const useIssueFetch = () => {
//   const { issues, setIssues } = useIssuesContext();
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchData = async (query = '', page = 1) => {
//     setLoading(true);
//     setError(null);
//     try {
//       const newIssues = await getIssues(query, page);
//       const updatedIssues = [...issues, ...newIssues];

//       setIssues(updatedIssues);
//     } catch (error: any) {
//       setError(error);
//     }
//     setLoading(false);
//   };

//   return { fetchData, loading, error };
// };
