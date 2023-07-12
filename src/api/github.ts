import axios from 'axios';

const githubAPI = axios.create({
  baseURL: 'https://api.github.com',
  headers: {
    Authorization: `Barer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
  },
});

export const getIssues = async (query = '', page = 1) => {
  const response = await githubAPI.get('/repos/facebook/react/issues', {
    params: {
      state: 'open',
      per_page: 30,
      page,
      direction: 'desc',
      sort: 'comments',
      q: query,
    },
  });

  return response.data;
};

export const getIssueDetail = async (issueNumber: number) => {
  const response = await githubAPI.get(`/repos/facebook/react/issues/${issueNumber}`);

  return response.data;
};

export const getRepoInfo = async () => {
  const response = await githubAPI.get('/repos/facebook/react', {
    headers: {
      Authorization: `Barer ${process.env.REACT_APP_GITHUB_API_TOKEN}`,
    },
  });

  return response.data;
};
