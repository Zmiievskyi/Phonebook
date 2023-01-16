import { createSlice } from "@reduxjs/toolkit";
import { fetchContacts, addContact, deleteContact } from "./operations";
import { logOut } from "../auth/operations";

export const phonebookSlice = createSlice({
  name: 'phonebook',

  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
    isOpenModal: false,
  },

  extraReducers: {
    //------------------------------------------
    [fetchContacts.pending](state) {
      state.contacts.isLoading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    //----------------------------------------
    [addContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [addContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      state.isOpenModal = false;
      state.contacts.items = [action.payload, ...state.contacts.items];
    },
    [addContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },
    //-----------------------------------------
    [deleteContact.pending](state) {
      state.contacts.isLoading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = null;
      const index = state.contacts.items.findIndex(
        contact => contact.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected](state, action) {
      state.contacts.isLoading = false;
      state.contacts.error = action.payload;
    },

    [logOut.fulfilled](state, action) {
      state.contacts.items = [];
    },
    //------------------------------------------
  },

  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    setModal: (state, action) => {
      state.isOpenModal = !state.isOpenModal;
    },
  },
});

export const { setFilter, setModal } = phonebookSlice.actions;

export const phonebookReducer = phonebookSlice.reducer;
