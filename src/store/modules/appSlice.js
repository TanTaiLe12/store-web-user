import { createSlice } from '@reduxjs/toolkit';

/**
 * Workspace for init state
 */
const initialState = {
  appActive: true,
};

/**
 * Workspace for reducer
 */
const reducers = {
  setAppActive(state, { payload }) {
    state.appActive = payload;
  },
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers,
});

export const { setAppActive } = appSlice.actions;

export default appSlice.reducer;
