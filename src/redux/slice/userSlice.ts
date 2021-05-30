import {
  ActionReducerMapBuilder,
  createAsyncThunk,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import axios from 'axios';
import { AppThunk, RootState } from 'redux/store';

export interface UserState {
  name: string;
  status: 'ready' | 'pending' | 'error' | 'success';
}

//initial state
const userState: UserState = {
  name: '',
  status: 'ready',
};

//asynchronous
export const getUserAsync = createAsyncThunk('user/getUser', async () => {
  const response = await axios.get('/getUser', { withCredentials: true });
  return response;
});

const afterGetUserAsync = (builder: ActionReducerMapBuilder<UserState>) => {
  builder
    .addCase(getUserAsync.pending, (state) => {
      state.status = 'pending';
    })
    .addCase(getUserAsync.fulfilled, (state, action) => {
      state.name = action.payload.data;
    });
};

//slice
export const userSlice = createSlice({
  name: 'user',
  initialState: userState,
  reducers: {
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
  extraReducers: (builder) => {
    afterGetUserAsync(builder);
  },
});

//selector
export const selectUser = (state: RootState) => state.user;

//after asynchronous finished,
//if want to use synchronous function, use this from the front part
export const referableForm =
  (anything: any): AppThunk =>
  (dispatch, getState) => {
    const currentUser = selectUser(getState());
    if (true) {
      dispatch(setName(currentUser.name));
    }
  };

//export synchronous
export const { setName } = userSlice.actions;

export default userSlice.reducer;
