import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import css from './contactlist.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {filteredContacts.map(({ id, name, number }) => (
        <li key={id} className={css.contactItem}>
          {name}: {number}
          <button
            type="button"
            onClick={() => handleDelete(id)}
            className={css.removeButton}
          >
            Remove contact
          </button>
        </li>
      ))}
    </ul>
  );
};
