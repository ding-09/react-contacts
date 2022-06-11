import { v4 as uuidv4 } from 'uuid';

export const mockUsers = [
  {
    username: 'Taro',
    password: 'chicken',
    userId: 1,
    contacts: [
      {
        id: uuidv4(),
        firstName: 'Tiffany',
        lastName: 'Ding',
        profilePic: '',
        phoneNumber: '(123) 456-7890',
        email: '123@yahoo',
        address: '123 Main St'
      },
    ],
  },
  {
    username: 'Bear',
    password: 'beef',
    userId: 2
  },
];
