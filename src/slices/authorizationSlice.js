import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  authKey: '',
  language: 'en',
};

export const authorizationSlice = createSlice({
  name: 'authorization',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
    },
    setKey: (state, action) => {
      state.authKey = action.payload;
    },
  },
});

export const {setLanguage, setKey} = authorizationSlice.actions;

export default authorizationSlice.reducer;
