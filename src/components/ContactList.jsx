import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import ContactItem from './ContactItem';
import { getContacts, getFilter } from 'store/selectors';

const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);

  const filteredContacts = useMemo(() => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  }, [filter, contacts]);

  return (
    <ul>
      {filteredContacts.map(contact => {
        const { id, name, number } = contact;
        return <ContactItem key={id} id={id} name={name} number={number} />;
      })}
    </ul>
  );
};

export default ContactList;
