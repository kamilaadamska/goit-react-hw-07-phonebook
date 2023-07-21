import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact } from './operations';

// const contactsInitialState = () => {
//   const contactsFromLS = localStorage.getItem('contacts');
//   const parsedContacts = JSON.parse(contactsFromLS);
//   if (parsedContacts) {
//     return parsedContacts;
//   } else {
//     return [];
//   }
// };

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,
    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.push(action.payload);
    },
    [addContact.rejected]: handleRejected,
  },
});

export const contactsReducer = contactsSlice.reducer;

//  addContact: {
//       reducer(state, action) {
//         if (
//           state.find(
//             contact =>
//               contact.name.toLowerCase() === action.payload.name.toLowerCase()
//           )
//         ) {
//           return alert(`${action.payload.name} is already in contacts!`);
//         }
//         state.push(action.payload);
//       },
//       prepare(name, number) {
//         return {
//           payload: {
//             id: nanoid(),
//             name,
//             number,
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.findIndex(contact => contact.id === action.payload);
//       state.splice(index, 1);
//     },
