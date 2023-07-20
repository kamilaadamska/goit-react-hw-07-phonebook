import { useSelector, useDispatch } from 'react-redux';
import { getFilter, getContacts } from 'redux/selectors';
import { deleteContact } from 'redux/actions';
import css from './contactlist.module.css';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

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
