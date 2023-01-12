import { createSlice } from '@reduxjs/toolkit';
// import { apiContacts, addContact, deleteContact } from './operations';

export const phonebookSlice = createSlice({
  name: 'phonebook',

  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },

  // extraReducers: {
  //   //------------------------------------------
  //   [apiContacts.pending](state) {
  //     state.contacts.isLoading = true;
  //   },
  //   [apiContacts.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items = action.payload;
  //   },
  //   [apiContacts.rejected](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  //   //----------------------------------------
  //   [addContact.pending](state) {
  //     state.contacts.isLoading = true;
  //   },
  //   [addContact.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     state.contacts.items = [action.payload, ...state.contacts.items];
  //     console.log(action.payload);
  //   },
  //   [addContact.rejected](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  //   //-----------------------------------------
  //   [deleteContact.pending](state) {
  //     state.contacts.isLoading = true;
  //   },
  //   [deleteContact.fulfilled](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = null;
  //     const index = state.contacts.items.findIndex(
  //       contact => contact.id === action.payload.id
  //     );
  //     state.contacts.items.splice(index, 1);
  //   },
  //   [deleteContact.rejected](state, action) {
  //     state.contacts.isLoading = false;
  //     state.contacts.error = action.payload;
  //   },
  //   //------------------------------------------
  // },

  reducers: {
    setFilter: (state, action) => {
      console.log(action.payload);
      state.filter = action.payload;
    },
    addContact: () => {},
  },
});

export const {setFilter } = phonebookSlice.actions;

export const phonebookReducer = phonebookSlice.reducer;
