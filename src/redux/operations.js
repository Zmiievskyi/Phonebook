import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://63b5a41758084a7af39b64ec.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (contactId, thunkAPI) => {
    try {
      const response = await axios.delete(`/contacts/${contactId}`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (newContact, thunkAPI) => {
    try {
      const respons = await axios({
        method: 'post',
        url: 'https://63b5a41758084a7af39b64ec.mockapi.io/contacts',
        data: newContact,
      });
      return respons.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);


