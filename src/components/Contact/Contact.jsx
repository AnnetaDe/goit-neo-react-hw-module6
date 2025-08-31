import { useDispatch } from 'react-redux';
import s from './Contact.module.css';
import { deleteContact } from '../../redux/contactsSlice';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();
  return (
    <li className={s.contactFormik}>
      <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
      <button
        className={s.formikLiBtn}
        onClick={() => dispatch(deleteContact(id))}
      >
        delete
      </button>
    </li>
  );
};
