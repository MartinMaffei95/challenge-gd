import { FormEvent, useState } from 'react';
import { items } from '../../config/fields.json';

import { useNavigate } from 'react-router-dom';

// ## COMPONENTS
import InputField from '../FormFields/InputField';
import { FieldItem } from '../../interfaces/FieldItem.interface';
import SelectField from '../FormFields/SelectField';
import CheckBoxField from '../FormFields/CheckBoxField';
import { useFormikRequired } from '../../Hooks/useFormikRequired';

import { useFormik, FormikProps } from 'formik';

const QuizFormContainer = () => {
  //Getting fields for form
  const [formFields, setFormFields] = useState<FieldItem[]>(items);

  const navigate = useNavigate();

  const { initialValues, validations } = useFormikRequired(items);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log('values ', values);
  };

  const {
    resetForm,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    values,
    touched,
  }: FormikProps<any> = useFormik<any>({
    onSubmit,
    initialValues,
    validationSchema: validations,
  });
  console.log(' ERRORS: ', errors);
  console.log(' t: ', touched);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {formFields
          ? formFields.map((field) => {
              switch (field.type) {
                case 'checkbox':
                  return (
                    <CheckBoxField
                      checked={values[field.name]}
                      key={field.name}
                      label={field?.label ? field?.label : ''}
                      inputName={field?.name ? field?.name : ''}
                      labelClassname="label-style"
                      inputClassname={'w-6 accent-primary-400'}
                      type={field?.type}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      errorMessage={
                        touched[field.name] || errors[field.name]
                          ? errors[field.name]
                          : null
                      }
                    />
                  );
                case 'select':
                  return (
                    <SelectField
                      value={values[field.name]}
                      key={field.name}
                      label={field?.label ? field?.label : ''}
                      inputName={field?.name ? field?.name : ''}
                      optGroup={field?.options ? field?.options : []}
                      labelClassname="label-style"
                      inputClassname={'input-style'}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      errorMessage={
                        touched[field.name] || errors[field.name]
                          ? errors[field.name]
                          : null
                      }
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
                      handleBlur={handleBlur}
                      errorMessage={
                        touched[field.name] || errors[field.name]
                          ? errors[field.name]
                          : null
                      }
                    />
                  );
              }
            })
          : null}
      </form>
    </div>
  );
};

export default QuizFormContainer;
