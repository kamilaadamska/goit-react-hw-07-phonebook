import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import css from './contactlist.module.css';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectFilteredContacts);

  const handleDelete = id => dispatch(deleteContact(id));

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id} className={css.contactItem}>
          {name}: {phone}
          <button
            onClick={() => handleDelete(id)}
            type="button"
            className={css.removeButton}
          >
            Remove contact
          </button>
        </li>
      ))}
    </ul>
  );
};
