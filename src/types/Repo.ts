export interface Repo {
  full_name: string;
}

export interface RepoState {
  data: Repo | null;
  fetchData?: () => void;
  loading: boolean;
  error: any;
}
