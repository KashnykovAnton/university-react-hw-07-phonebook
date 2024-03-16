import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAddContact,
  fetchContacts,
  fetchDeleteContact,
} from 'services/contacts-api';

export const fetchContact = createAsyncThunk(
  'contacts/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const data = await fetchContacts();
      console.log('DATA: ', data);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (item, { rejectWithValue }) => {
    try {
      const data = await fetchAddContact(item);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await fetchDeleteContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
