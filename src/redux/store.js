import { configureStore } from '@reduxjs/toolkit';
import { phonebookReducer } from './phonebookSlice';
import { apiContacts } from './operations';

export const store = configureStore({
  reducer: {
    phonebook: phonebookReducer,
    [apiContacts.reducerPath]: apiContacts.reducer,
  },
  
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(apiContacts.middleware),
});
