import { createSlice, nanoid } from '@reduxjs/toolkit';

const contactsInitialState = () => {
  const contactsFromLS = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contactsFromLS);
  if (parsedContacts) {
    return parsedContacts;
  } else {
    return [];
  }
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: contactsInitialState,
  reducers: {
    addContact: {
      reducer(state, action) {
        if (
          state.find(
            contact =>
              contact.name.toLowerCase() === action.payload.name.toLowerCase()
          )
        ) {
          return alert(`${action.payload.name} is already in contacts!`);
        }
        state.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
