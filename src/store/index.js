import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import appReducer from './modules/appSlice';
import authSlice from './modules/authSlice';


const rootReducer = combineReducers({
  app: appReducer,
  auth: authSlice,
});

export default configureStore({
  reducer: rootReducer,
})
