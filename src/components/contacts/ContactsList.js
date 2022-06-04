import ContactCard from './ContactCard';
import { Container } from './ContactList.styled';

const ContactList = ({ contacts = [] }) => {
  return (
    <Container>
      {contacts.map((contact) => (
        <ContactCard
          key={contact.id}
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
