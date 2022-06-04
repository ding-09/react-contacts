// importing styled components from newly created
// ContactList.styled.js 
import { Container, Figure, ContactInfo, Button } from './ContactCard.styled';

const ContactCard = ({
  firstName = '',
  lastName = '',
  phoneNumber = '',
  profilePic = '',
}) => {
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
      <Button>X</Button>
    </Container>
  );
};

export default ContactCard;
