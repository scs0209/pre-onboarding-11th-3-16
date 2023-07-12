// Issues State Type
interface User {
  id: number;
  login: string;
  avatar_url: string;
}

export interface Issue {
  id: number;
  title: string;
  state: string;
  created_at: string;
  user: User;
  html_url: string;
}

export interface IssuesState {
  issues: Issue[];
  setIssues: (issues: Issue[]) => void;
  fetchData: () => void;
  loading: boolean;
  error: any | null;
  requestMoreData: () => void;
}
