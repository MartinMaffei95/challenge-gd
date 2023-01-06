import { useState } from 'react';
import { FieldItem } from '../interfaces/FieldItem.interface';

export const useFormFields = (fields: FieldItem[]) => {
  const [initialValues, setInitialValues] = useState<object>({});
  let validationSchema;

  for (let i = 0; i < fields.length; i++) {
    const field = fields[i];
    if (!field.name) return;
    setInitialValues((prevState) => ({
      ...prevState,
      [field.name]: '',
    }));
  }
  console.log(initialValues);

  return { initialValues, validationSchema };
};
