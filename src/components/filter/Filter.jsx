import { useSelector, useDispatch } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/actions';
import css from './filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);

  const handleFilterChange = filter => dispatch(setFilter(filter));

  return (
    <label className={css.filterLabel}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={e => handleFilterChange(e.target.value)}
        value={filter}
        className={css.filterInput}
      />
    </label>
  );
};
