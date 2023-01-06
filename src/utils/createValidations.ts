import * as Yup from 'yup';
import { AnyObject } from 'yup/lib/types';
import { FieldItem } from '../interfaces/FieldItem.interface';

// type YupBoolean = Yup.BooleanSchema<
//   boolean | undefined,
//   AnyObject,
//   boolean | undefined
// >;
type YupString = Yup.StringSchema<
  string | undefined,
  AnyObject,
  string | undefined
>;

const generateValidations = (field: FieldItem) => {
  let schema = Yup['string']();

  switch (field.type) {
    // case 'checkbox':
    //   schema = (schema as YupBoolean).isTrue().required();
    //   break;
    case 'email':
      schema = (schema as YupString).email().required();
      break;
    case 'text' || 'select':
      schema = (schema as YupString).required();
      break;
    default:
      break;
  }

  return schema;
};

export const getInputs = (arrayOfFields: FieldItem[]) => {
  let initialValues: { [key: string]: any } = {};
  let validationsFields: { [key: string]: any } = {};

  for (const field of arrayOfFields) {
    if (!field.name) return;
    initialValues[field.name] = '';

    if (!field.required) continue;

    const schema = generateValidations(field);

    validationsFields[field.name] = schema;
    console.log(validationsFields);
  }
  return {
    initialValues,
    inputs: arrayOfFields,
    validationSchema: Yup.object({ ...validationsFields }),
  };
};
