import { configureStore } from '@reduxjs/toolkit';

import issueDetailSlice from './slice/issueDetailSlice';
import issueSlice from './slice/issueSlice';
import repoSlice from './slice/repoSlice';

export const store = configureStore({
  reducer: {
    issues: issueSlice,
    issueDetail: issueDetailSlice,
    repo: repoSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type SliceName = keyof RootState;
