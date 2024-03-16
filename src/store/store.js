import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { contactsSliceReducer } from './contacts/contacts-slice-contacts';
import { filterSliceReducer } from './contacts/contacts-slice-filter';

export const store = configureStore({
  reducer: {
    contacts: contactsSliceReducer,
    filter: filterSliceReducer,
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
