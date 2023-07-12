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
  number: number;
  comments: number;
  body: string;
}

export interface IssuesState {
  data: Issue[] | null;
  setIssues?: (issues: Issue[]) => void;
  fetchData?: () => void;
  loading: boolean;
  error: any | null;
  requestMoreData: () => void;
}

export interface IssueDetailState {
  data: Issue | null;
  loading: boolean;
  error: any;
  updateIssueDetail?: (issueNumber: number) => void;
}
