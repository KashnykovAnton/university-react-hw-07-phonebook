import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'store/contactsSlice/contactsSlice';
import { getContacts } from 'store/selectors';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    formSubmitHandler({ name, number, id: Math.floor(Math.random() * 100) });
    resetForm();
  };

  const formSubmitHandler = contact => {
    contacts.find(el => {
      return el.name.toLowerCase() === contact.name.toLowerCase();
    })
      ? alert(`${contact.name} is already in contacts`)
      : dispatch(addContact(contact));
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className="Container ContactFormSection" onSubmit={handleFormSubmit}>
      <label className="InputLabel">
        Name
        <input
          className="Input"
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          placeholder="Please enter name"
          required
          onChange={handleChange}
          value={name}
        />
      </label>
      <label className="InputLabel">
        Number
        <input
          className="Input"
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-\.\s]?\(?\d{1,3}?\)?[-\.\s]?\d{1,4}[-\.\s]?\d{1,4}[-\.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          placeholder="Please enter number"
          required
          onChange={handleChange}
          value={number}
        />
      </label>
      <div className="ButtonWrapper">
        <button className="Button AddContactButton" type="submit">
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
