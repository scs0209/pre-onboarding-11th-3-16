import { useRepoContext } from '@/context/RepoContext';
import { RepoHeader } from '@/styles/Header';

const Header = () => {
  const { repo, loading, error } = useRepoContext();

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!repo) return <div>No data available</div>;

  return (
    <RepoHeader>
      <h1>{repo.full_name}</h1>
    </RepoHeader>
  );
};

export default Header;
