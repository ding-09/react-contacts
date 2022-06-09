import styled from 'styled-components';

export const Form = styled.form`
  border: 2px solid purple;
  display: flex;
  gap: 2.5rem;
  padding: 3rem;
  margin-top: 5rem;
  background-color: #f0f0f0;
`;

export const Figure = styled.figure`
  padding-top: 0.5rem;
  img {
    width: 90px;
    height: 90px;
    border-radius: 50%;
  }
`;

export const InputContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding-top: 0.1rem;
  input {
    border: none;
    padding: 0.5rem 1.5rem;
    font-size: 1.4rem;
    background-color: #f0f0f0;
    &::placeholder {
      color: #696969;
    }
  }
`;

export const InputGroup = styled.div`
  border-bottom: 1px solid lightgray;
`;

export const SubmitBtn = styled.button`
  padding: 0.8rem 1.5rem;
  text-transform: uppercase;
  cursor: pointer;
  border: 1px solid #696969;
  &:hover {
    background-color: #c0c0c0;
  }
`;
