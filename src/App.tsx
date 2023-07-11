import { useEffect, useState } from 'react';

import { getIssues } from './api/github';

function App() {
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
    <div className="App">
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
    </div>
  );
}

export default App;
