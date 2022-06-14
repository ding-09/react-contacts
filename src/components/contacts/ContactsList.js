import ContactCard from './ContactCard';
import { useContacts } from '../../providers/ContactsProvider';
import { useAuth } from '../../providers/AuthProvider';

// importing styled component from newly created
// ContactList.styled.js
import { Container, LogoutButton } from './ContactList.styled';

const ContactList = () => {
  const contactsContext = useContacts();
  const authContext = useAuth();

  return (
    <Container>
      <LogoutButton
        onClick={() => {
          authContext.logout();
        }}
      >
        Log out
      </LogoutButton>
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
