import { useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { ContactForm } from './contactform/ContactForm';
import { ContactList } from './contactlist/ContactList';
import { Filter } from './filter/Filter';
import css from './app.module.css';
import { useEffect } from 'react';

export const App = () => {
  const contacts = useSelector(getContacts);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.headerSecondary}>Contacts</h2>
      <div className={css.contactsBox}>
        <Filter />
        <ContactList />
      </div>
    </div>
  );
};
