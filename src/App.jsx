import './App.css';
import { ContactForm } from './components/ContactForm/ContactForm';
import { formValidation } from './components/ContactForm/formValidation';
import { ContactList } from './components/ContactList/ContactList';

import { SearchBox } from './components/SearchBox/SearchBox';
function App() {
  return (
    <div>
      <h1>Phonebook</h1>

      <div>
        <ContactForm formValidation={formValidation} />
        <SearchBox />
        <ContactList />
      </div>
    </div>
  );
}
export default App;
