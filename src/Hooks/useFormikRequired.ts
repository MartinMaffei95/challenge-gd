import { useEffect, useState } from 'react';
import { FieldItem } from '../interfaces/FieldItem.interface';
import { items } from '../config/fields.json';

import * as yup from 'yup';
import { AnyObject } from 'yup/lib/types';

type YupBoolean = yup.BooleanSchema<
  boolean | undefined,
  AnyObject,
  boolean | undefined
>;
type YupString = yup.StringSchema<
  string | undefined,
  AnyObject,
  string | undefined
>;
const requiredMsg = 'Este campo es requerido';
export function createYupSchema(schema, config) {
  const { name, required, type } = config;
  let validator;
  switch (type) {
    case 'text':
      if (required) validator = yup['string']().required(requiredMsg);
      else validator = yup['string']().required(requiredMsg);
      break;

    case 'select':
      if (required) validator = yup['string']().required(requiredMsg);
      else validator = yup['string']().required(requiredMsg);
      break;

    case 'email':
      if (required)
        validator = yup['string']()
          .email('La direccion de mail no es valida')
          .required(requiredMsg);
      else
        validator = yup['string']()
          .email('La direccion de mail no es valida')
          .required(requiredMsg);
      break;
    case 'checkbox':
      if (required)
        validator = yup['boolean']()
          .oneOf([true], 'Debes aceptar los terminos y condiciones')
          .required();
      else
        validator = yup['boolean']().oneOf(
          [true],
          'Debes aceptar los terminos y condiciones'
        );
      break;
    case 'date':
      if (required) validator = yup['date']().required(requiredMsg);
      else validator = yup['date']().required(requiredMsg);
      break;

    default:
      break;
  }

  //   if (!yup[required]) {
  //     return schema;
  //   }
  //   validator = yup[type]();
  //   validations.forEach((validation) => {
  //     const { params, type } = validation;
  //     if (!validator[type]) {
  //       return;
  //     }
  //     console.log(type, params);
  //     validator = validator[type](...params);
  //   });
  schema[name] = validator;

  //   console.log(schema);

  return schema;
}

export const useFormikRequired = (items: FieldItem[]) => {
  const [initialValues, setInitialValues] = useState({});
  const [validations, setValidations] = useState({});

  const createInitialValues = (items: FieldItem[]) => {
    for (let index = 0; index < items.length; index++) {
      const field = items[index];
      if (!field?.name) return;
      setInitialValues((prevValue) => ({
        ...prevValue,
        [field?.name as any]: '',
      }));
      //   setValidations((prevValue) => ({
      //     ...prevValue,
      //     [field?.name as any]: {
      //       required: field?.required,
      //       type: field?.type,
      //       name: field?.name,
      //     },
      //   }));
    }
  };

  useEffect(() => {
    if (!items) return;
    createInitialValues(items);
    const schema = items.reduce(createYupSchema, {});
    const validateSchema = yup.object().shape(schema);
    setValidations(validateSchema);
  }, [items]);
  return { initialValues, validations };
};
