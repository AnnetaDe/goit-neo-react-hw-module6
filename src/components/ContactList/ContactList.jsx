import { useSelector } from 'react-redux';
import s from './ContactList.module.css';
import { selectNameFilter } from '../../redux/filtersSlice';

import { selectContacts } from '../../redux/contactsSlice';
import { Contact } from '../Contact/Contact';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  console.log(contacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter(
    contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()) ||
      contact.number.includes(filter)
  );

  return (
    <div>
      <ul className={s.contactsFormik}>
        {filteredContacts.map(contact => (
          <Contact li key={contact.id} {...contact} />
        ))}
      </ul>
    </div>
  );
};
