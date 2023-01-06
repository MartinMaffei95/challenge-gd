// ## REACT, TYPES, & INTERFACES
import { FormEvent, useState } from 'react';
import { FieldItem } from '../../interfaces/FieldItem.interface';

// ## GETTING ITEMS FOR FORM
import { items } from '../../config/fields.json';

// ## COMPONENTS
import InputField from '../FormFields/InputField';
import SelectField from '../FormFields/SelectField';
import CheckBoxField from '../FormFields/CheckBoxField';
// ## TOASTIFY
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// ## FORMIK
import { useFormik, FormikProps } from 'formik';
import { useFormikRequired } from '../../Hooks/useFormikRequired';
// ## SERVICES
import { postQuizes } from '../../services/Quizes.services';
import { runToast } from '../../utils/runToast';

type QuizFormContainerProps = {
  handleModal: Function;
};
const QuizFormContainer = ({ handleModal }: QuizFormContainerProps) => {
  //Getting fields for form
  const [formFields, setFormFields] = useState<FieldItem[]>(items);

  const { initialValues, validations } = useFormikRequired(items);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    try {
      const response = await postQuizes(values);
      //setting localstorage with id
      localStorage.setItem('client_id', JSON.stringify(response));
      //reset form values
      setValues(initialValues);
      setErrors(initialValues);
      setTouched(initialValues);
      //redirect
      handleModal(true);
    } catch (err) {
      if (err instanceof Error) {
        runToast('ERROR', 'Ocurrio un error. No pudimos enviar la encuesta');
      } else {
        runToast('ERROR', 'Ocurrio un error. No pudimos enviar la encuesta');
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
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <form onSubmit={handleSubmit}>
        {formFields
          ? formFields.map((field, i) => {
              switch (field.type) {
                case 'checkbox':
                  return (
                    <CheckBoxField
                      key={field?.name || i}
                      value={values[field.name ? field.name : 0]}
                      label={field?.label ? field?.label : ''}
                      inputName={field?.name ? field?.name : ''}
                      labelClassname="label-style"
                      inputClassname={'w-6 accent-primary-400'}
                      type={field?.type}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      errorMessage={
                        touched[field.name || 0] && errors[field.name || 0]
                          ? (errors[field.name || 0] as string)
                          : null
                      }
                    />
                  );
                case 'select':
                  return (
                    <SelectField
                      key={field?.name || i}
                      value={values[field.name || 0]}
                      label={field?.label ? field?.label : ''}
                      inputName={field?.name ? field?.name : ''}
                      optGroup={field?.options ? field?.options : []}
                      labelClassname="label-style"
                      inputClassname={'input-style'}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      errorMessage={
                        touched[field.name || 0] && errors[field.name || 0]
                          ? (errors[field.name || 0] as string)
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
                      value={values[field.name || 0]}
                      label={field?.label ? field?.label : ''}
                      inputName={field?.name ? field?.name : ''}
                      labelClassname="label-style"
                      inputClassname={'input-style'}
                      type={field?.type}
                      handleChange={handleChange}
                      handleBlur={handleBlur}
                      errorMessage={
                        touched[field.name || 0] && errors[field.name || 0]
                          ? (errors[field.name || 0] as string)
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
