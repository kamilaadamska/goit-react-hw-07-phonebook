import { createReducer } from '@reduxjs/toolkit';
import { addContact, deleteContact, setFilter } from './actions';

const contactsInitialState = () => {
  const contactsFromLS = localStorage.getItem('contacts');
  const parsedContacts = JSON.parse(contactsFromLS);
  if (parsedContacts) {
    return parsedContacts;
  } else {
    return [];
  }
};

export const contactsReducer = createReducer(contactsInitialState, {
  [addContact]: (state, action) => {
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
  [deleteContact]: (state, action) => {
    const index = state.findIndex(contact => contact.id === action.payload);
    state.splice(index, 1);
  },
});

const filterInitialState = '';

export const filterReducer = createReducer(filterInitialState, {
  [setFilter]: (_, action) => {
    return action.payload;
  },
});
