import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    filterContact: (_, { payload }) => payload,
  },
});

export const filterSliceReducer = filterSlice.reducer;
export const { filterContact } = filterSlice.actions;
