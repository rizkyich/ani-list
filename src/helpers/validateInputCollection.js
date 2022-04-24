import { specialCharacter } from '../constants';

export const validateInputCollection = (str, arr) => {
  if (Boolean(arr.find((item) => item.name === str.trim()))) {
    return 'Collection name must unique';
  }

  if (specialCharacter.test(str)) {
    return 'Name cannot contain special characters';
  }

  return '';
};
