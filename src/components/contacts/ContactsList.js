import ContactCard from './ContactCard';
import { useContacts } from '../../providers/ContactsProvider'

// importing styled component from newly created
// ContactList.styled.js 
import { Container } from './ContactList.styled';

const ContactList = () => {
  const contactsContext = useContacts()
  return (
    <Container>
      {contactsContext.contacts.map((contact) => (
        <ContactCard
          key={contact.id}
          id={contact.id}
          firstName={contact.firstName}
          lastName={contact.lastName}
          phoneNumber={contact.phoneNumber}
          profilePic={contact.profilePic}
        />
      ))}
    </Container>
  );
};

export default ContactList;
