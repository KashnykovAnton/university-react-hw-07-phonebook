import { useDispatch } from 'react-redux';
import { deleteContact } from 'store/contactsSlice/contactsSlice';

const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <li className="ContactItem">
      <span>
        {name}: {number}
      </span>
      <div className="ButtonWrapper DeleteButtonWrapper">
        <button
          className="Button DeleteButton"
          type="button"
          onClick={() => {
            onDelete(id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default ContactItem;
