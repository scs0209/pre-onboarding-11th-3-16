import { useEffect, useState } from 'react';

import { getRepoInfo } from '@/api/github';
import { RepoHeader } from '@/styles/Header';

const Header = () => {
  const [repoInfo, setRepoInfo] = useState<any>(null);

  useEffect(() => {
    async function fetchRepoInfo() {
      const fetchedRepoInfo = await getRepoInfo();

      setRepoInfo(fetchedRepoInfo);
    }
    fetchRepoInfo();
  }, []);

  if (!repoInfo) return <div>Loading...</div>;

  return (
    <RepoHeader>
      <h1>{repoInfo.full_name}</h1>
    </RepoHeader>
  );
};

export default Header;
