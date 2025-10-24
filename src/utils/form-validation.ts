export const validatePhoneNumber = (value: string) => {
  value = String(value).replace(/[^0-9]/g, '');

  const length = {
    value: 11,
    message: 'Некорректно введен номер телефона',
  };

  if (String(value).length !== length.value) {
    return length.message;
  }

  return '';
};
