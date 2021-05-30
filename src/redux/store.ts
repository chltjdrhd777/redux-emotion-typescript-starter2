import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import user from 'redux/slice/userSlice';

//reducer => function which accept state and return state + accept action and utilize it
export const store = configureStore({
  reducer: { user },
});

//types
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
