import { ChangeEvent, ChangeEventHandler, useEffect, useState } from 'react';
import { items } from '../../config/fields.json';

import { useNavigate } from 'react-router-dom';

// ## COMPONENTS
import InputField from '../FormFields/InputField';
import { FieldItem } from '../../interfaces/FieldItem.interface';
import SelectField from '../FormFields/SelectField';
import CheckBoxField from '../FormFields/CheckBoxField';

const QuizFormContainerTWO = () => {
  //Getting fields for form
  const [formFields, setFormFields] = useState<FieldItem[]>(items);

  const [values, setValues] = useState({});
  const [validations, setValidations] = useState({});
  const navigate = useNavigate();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSelect = (e: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleCheck = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setValues({
      ...values,
      [name]: checked,
    });
  };

  const createInitialValues = (fields: FieldItem[]) => {
    for (let index = 0; index < fields.length; index++) {
      const field = fields[index];
      if (!field?.name) return;
      setValues((prevValue) => ({
        ...prevValue,
        [field?.name as any]: '',
      }));
      setValidations((prevValue) => ({
        ...prevValue,
        [field?.name as any]: {
          required: field?.required,
          type: field?.type,
        },
      }));
    }
  };
  const validate = (reqBody: any) => {};
  useEffect(() => {
    createInitialValues(items);
  }, []);
  const onSubmit = async (): Promise<void> => {};

  return (
    <div>
      <form>
        {formFields
          ? formFields.map((field) => {
              switch (field.type) {
                case 'checkbox':
                  return (
                    <CheckBoxField
                      value={values[field.name]}
                      key={field.name}
                      label={field?.label ? field?.label : ''}
                      inputName={field?.name ? field?.name : ''}
                      labelClassname="label-style"
                      inputClassname={'w-6 accent-primary-400'}
                      type={field?.type}
                      handleChange={handleCheck}
                    />
                  );
                case 'select':
                  return (
                    <SelectField
                      checked={values[field.name]}
                      key={field.name}
                      label={field?.label ? field?.label : ''}
                      inputName={field?.name ? field?.name : ''}
                      optGroup={field?.options ? field?.options : []}
                      labelClassname="label-style"
                      inputClassname={'input-style'}
                      handleChange={handleSelect}
                    />
                  );
                case 'submit':
                  return (
                    <button
                      className="btn-input font-bold text-lg mt-2 mb-2"
                      type="submit"
                    >
                      Guardar
                    </button>
                  );

                default:
                  return (
                    <InputField
                      value={values[field.name]}
                      key={field.name}
                      label={field?.label ? field?.label : ''}
                      inputName={field?.name ? field?.name : ''}
                      labelClassname="label-style"
                      inputClassname={'input-style'}
                      type={field?.type}
                      handleChange={handleChange}
                    />
                  );
              }
            })
          : null}
      </form>
    </div>
  );
};

export default QuizFormContainerTWO;
