import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Issue } from '@/types/Issue';

interface IssuesState {
  data: Issue[] | null;
  loading: boolean;
  error: any | null;
}

const initialState: IssuesState = {
  data: [],
  loading: false,
  error: null,
};

const issuesSlice = createSlice({
  name: 'issues',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<{ newIssues: Issue[]; prevData: Issue[] | null }>) => {
      if (action.payload.prevData) {
        state.data = [...action.payload.prevData, ...action.payload.newIssues];
      } else {
        state.data = action.payload.newIssues;
      }
    },
  },
});

export const { setLoading, setError, setData } = issuesSlice.actions;

export default issuesSlice.reducer;
