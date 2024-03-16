import { useSelector } from 'react-redux';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { getContacts } from 'store/contacts/contacts-selectors';
import './App.css';

const App = () => {
  const contacts = useSelector(getContacts);

  return (
    <div className="Container Main">
      <h1>Phonebook</h1>
      <ContactForm />
      <div className="Container ContactsListSection ">
        <h2 className="ContactsHeader">Contacts</h2>
        {contacts.length !== 0 && <Filter />}
        <ContactList />
      </div>
    </div>
  );
};

export default App;
