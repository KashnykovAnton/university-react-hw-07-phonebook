import { createSlice } from '@reduxjs/toolkit';
import { fetchContact, addContact, deleteContact } from './contacts-thunks';
import {
  handleAddContact,
  handleDeleteContact,
  handleFetchContact,
  handlePending,
  handleRejected,
} from './contacts-functions';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContact.fulfilled, handleFetchContact)
      .addCase(addContact.fulfilled, handleAddContact)
      .addCase(deleteContact.fulfilled, handleDeleteContact)
      .addMatcher(action => action.type.endsWith('pending'), handlePending)
      .addMatcher(action => action.type.endsWith('rejected'), handleRejected);
  },
});

export const contactsSliceReducer = contactsSlice.reducer;