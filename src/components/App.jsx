import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectIsLoading, selectError } from 'redux/selectors';
import { ContactForm } from './contactform/ContactForm';
import { ContactList } from './contactlist/ContactList';
import { Filter } from './filter/Filter';
import css from './app.module.css';
import { fetchContacts } from 'redux/operations';
import { Blocks } from 'react-loader-spinner';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.container}>
      <h1 className={css.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={css.headerSecondary}>Contacts</h2>
      <div className={css.contactsBox}>
        <Filter />
        {isLoading && (
          <div className={css.centred}>
            <Blocks />
          </div>
        )}
        {error && (
          <div className={css.centred}>
            <b>{error}</b>
          </div>
        )}
        {contacts && <ContactList />}
      </div>
    </div>
  );
};
