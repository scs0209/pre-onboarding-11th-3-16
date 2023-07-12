import { useRepoContext } from '@/context/RepoContext';
import { RepoHeader } from '@/styles/Header';

import DataLoader from '../DataLoader/DataLoader';

const Header = () => {
  const { data: repo, loading, error } = useRepoContext();

  return (
    <DataLoader data={repo} loading={loading} error={error}>
      {(repo) => (
        <RepoHeader>
          <h1>{repo.full_name}</h1>
        </RepoHeader>
      )}
    </DataLoader>
  );
};

export default Header;
