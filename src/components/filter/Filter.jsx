import { useSelector, useDispatch } from 'react-redux';
import { selectFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import css from './filter.module.css';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

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
