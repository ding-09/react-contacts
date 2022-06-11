// importing styled components from newly created
// ContactList.styled.js
import { Container, Figure, ContactInfo, Button } from './ContactCard.styled';

// import useContacts
import { useContacts } from '../../providers/ContactsProvider';

const ContactCard = ({ firstName, lastName, phoneNumber, profilePic, id }) => {
  const contactsContext = useContacts();
  return (
    <Container>
      <Figure>
        <img src={profilePic} alt={`Profile of ${firstName} ${lastName}.`} />
      </Figure>
      <ContactInfo>
        <h2>
          {firstName} {lastName}
        </h2>
        <p>{phoneNumber}</p>
      </ContactInfo>
      <Button onClick={() => contactsContext.deleteContact(id)}>X</Button>
    </Container>
  );
};

export default ContactCard;
