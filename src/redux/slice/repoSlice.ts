import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { Repo, RepoState } from '@/types/Repo';

const initialState: RepoState = {
  data: null,
  loading: false,
  error: null,
};

const repoSlice = createSlice({
  name: 'repo',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<any>) => {
      state.error = action.payload;
    },
    setData: (state, action: PayloadAction<Repo>) => {
      state.data = action.payload;
    },
  },
});

export const { setLoading, setError, setData } = repoSlice.actions;

export default repoSlice.reducer;
