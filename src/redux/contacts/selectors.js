export const getContacts = (state) => state.phonebook.contacts;
export const getSearchName = (state) => state.phonebook.filter;
export const getModalState = (state) => state.phonebook.isOpenModal;
export const isLoading = (state) => state.phonebook.contacts.isLoading
export const getIsEdit = (state) => state.phonebook.contacts.isEdit