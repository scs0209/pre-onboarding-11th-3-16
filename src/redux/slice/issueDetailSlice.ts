import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Issue, IssueDetailState } from '@/types/Issue';

const initialState: IssueDetailState = {
  data: null,
  loading: false,
  error: null,
};

const issueDetailSlice = createSlice({
  name: 'issueDetail',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<Issue>) => {
      state.data = action.payload;
    },
  },
});

export const { setLoading, setError, setData } = issueDetailSlice.actions;

export default issueDetailSlice.reducer;
