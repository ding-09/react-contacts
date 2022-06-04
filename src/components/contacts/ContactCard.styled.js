import styled from 'styled-components';

export const Container = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 85%;
  padding: 10px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
`;

export const Figure = styled.figure`
  max-width: 140px;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
  padding: 0 15px;
  img {
    display: block;
    max-width: 100%;
    height: auto;
    border-radius: 50%;
  }
`;

export const ContactInfo = styled.div`
  flex: 2;
  margin-left: 20px;
  color: #696969;
  font-weight: 500;
  h2 {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 5px;
  }
  p {
    font-size: 16px;
  }
`;

export const Button = styled.button`
  border: none;
  border-radius: 50%;
  min-width: 25px;
  min-height: 24px;
  background-color: #b0b0b0;
  color: #ffffff;
  font-weight: 900;
  font-size: 14px;
  margin-right: 10px;
  cursor: pointer;

  /* change button's background to red on hover  */
  /* since it is a delete action */
  &:hover {
    background-color: #ff0033;
  }
`;
