import { configureStore } from '@reduxjs/toolkit';

import issueSlice from './slice/issueSlice';

export const store = configureStore({
  reducer: {
    issues: issueSlice,
  },
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
