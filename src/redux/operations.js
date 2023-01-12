import { createAsyncThunk } from '@reduxjs/toolkit';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import axios from 'axios';

axios.defaults.baseURL = 'https://63b5a41758084a7af39b64ec.mockapi.io';

export const apiContacts = createApi({
  reducerPath: 'contacts/addContact',
  tagTypes: ['Phonebook'],
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://63b5a41758084a7af39b64ec.mockapi.io',
  }),
  endpoints: builder => ({
    getContacts: builder.query({
      query: () => `contacts/`,
      providesTags: result =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Phonebook', id })),
              { type: 'Phonebook', id: 'LIST' },
            ]
          : [{ type: 'Phonebook', id: 'LIST' }],
    }),
    addContact: builder.mutation({
      query: newContact => ({
        method: 'post',
        url: '/contacts',
        body: newContact,
      }),
      invalidatesTags: [{ type: 'Phonebook', id: 'LIST' }],
    }),
    deleteContact: builder.mutation({
      query: id => ({
        url: `contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: [{ type: 'Phonebook', id: 'LIST' }],
    }),
  }),
});

export const {
  useGetContactsQuery,
  useAddContactMutation,
  useDeleteContactMutation,
} = apiContacts;
