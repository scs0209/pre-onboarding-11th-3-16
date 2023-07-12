export interface Repo {
  full_name: string;
}

export interface RepoState {
  repo: Repo | null;
  fetchData?: () => void;
  loading: boolean;
  error: any;
}
