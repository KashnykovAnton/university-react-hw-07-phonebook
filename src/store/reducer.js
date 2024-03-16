import { combineReducers } from 'redux';
import { contactsSliceReducer } from './contactsSlice/contactsSlice';
import { filterSliceReducer } from './filterSlice/filterSlice';

export const reducer = combineReducers({
  contacts: contactsSliceReducer,
  filter: filterSliceReducer,
});
