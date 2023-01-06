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
import { postQuizes } from '../../services/Quizes.services';

type QuizFormContainerProps = {
  handleModal: Function;
};
const QuizFormContainer = ({ handleModal }: QuizFormContainerProps) => {
  //Getting fields for form
  const [formFields, setFormFields] = useState<FieldItem[]>(items);

  const navigate = useNavigate();

  const { initialValues, validations } = useFormikRequired(items);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      await postQuizes(values);
      //reset form values
      setValues(initialValues);
      setErrors(initialValues);
      setTouched(initialValues);
      //redirect
      handleModal(true);
    } catch (err) {
      if (err instanceof Error) {
        console.log(err);
      } else {
        console.log(err);
      }
    }
  };
  const {
    setErrors,
    setTouched,
    setValues,
    handleSubmit,
    handleChange,
    handleBlur,
    errors,
    values,
    touched,
  }: FormikProps<any> = useFormik<any>({
    onSubmit,
    initialValues: initialValues,
    validationSchema: validations,
  });

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button onClick={() => handleModal(true)}>ABRIR</button>
        {formFields
          ? formFields.map((field, i) => {
              switch (field.type) {
                case 'checkbox':
                  return (
                    <CheckBoxField
                      key={field?.name || i}
                      checked={values[field.name]}
                      label={field?.label ? field?.label : ''}
                      inputName={field?.name ? field?.name : ''}
                      labelClassname="label-style"
                      inputClassname={'w-6 accent-primary-400'}
                      type={field?.type}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      errorMessage={
                        touched[field.name] && errors[field.name]
                          ? errors[field.name]
                          : null
                      }
                    />
                  );
                case 'select':
                  return (
                    <SelectField
                      key={field?.name || i}
                      value={values[field.name]}
                      label={field?.label ? field?.label : ''}
                      inputName={field?.name ? field?.name : ''}
                      optGroup={field?.options ? field?.options : []}
                      labelClassname="label-style"
                      inputClassname={'input-style'}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      errorMessage={
                        touched[field.name] && errors[field.name]
                          ? errors[field.name]
                          : null
                      }
                    />
                  );
                case 'submit':
                  return (
                    <button
                      key={field?.name || i}
                      className="btn-input font-bold text-lg mt-2 mb-2"
                      type="submit"
                    >
                      Guardar
                    </button>
                  );
                default:
                  return (
                    <InputField
                      key={field?.name || i}
                      value={values[field.name]}
                      label={field?.label ? field?.label : ''}
                      inputName={field?.name ? field?.name : ''}
                      labelClassname="label-style"
                      inputClassname={'input-style'}
                      type={field?.type}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      errorMessage={
                        touched[field.name] && errors[field.name]
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
