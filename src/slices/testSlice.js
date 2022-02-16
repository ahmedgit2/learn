import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  value: '',
};

export const testSlice = createSlice({
  name: 'test',
  initialState,
  reducers: {
    setText: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const {setText} = testSlice.actions;

export default testSlice.reducer;
