import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'store/contacts/contacts-slice-filter';
import { getFilter } from 'store/contacts/contacts-selectors';

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
        placeholder="Filter contacts here"
        onChange={changeFilter}
        value={filter}
      />
    </>
  );
};

export default Filter;
