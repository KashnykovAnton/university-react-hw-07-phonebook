import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'store/filterSlice/filterSlice';
import { getFilter } from 'store/selectors';

const Filter = () => {
  const filter = useSelector(getFilter);

  const dispatch = useDispatch();

  const changeFilter = useCallback(
    e => {
      dispatch(filterContact(e.target.value));
    },
    [dispatch]
  );
  return (
    <>
      <h3>Find contacts by name</h3>
      <input
        className="Input"
        type="text"
        name="filter"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        placeholder="Filter contacts here"
        onChange={changeFilter}
        value={filter}
      />
    </>
  );
};

export default Filter;
