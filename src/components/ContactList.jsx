import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import {
  getContacts,
  getFilter,
  getLoader,
} from 'store/contacts/contacts-selectors';
import { fetchContact } from 'store/contacts/contacts-thunks';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const loader = useSelector(getLoader);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContact());
  }, [dispatch]);

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [filter, contacts]);

  return (
    <>
      {loader && <h1>Loading...</h1>}
      <ul>
        {!loader &&
          filteredContacts.map(({ id, name, number }) => {
            return <ContactItem key={id} id={id} name={name} number={number} />;
          })}
      </ul>
      {filteredContacts.length === 0 && !loader && (
        <h3>There are no contacts in phonebook!</h3>
      )}
    </>
  );
};

export default ContactList;
