import { useState } from 'react';
import { items } from '../../config/fields.json';

import { Form, useNavigate } from 'react-router-dom';

// ## FORMIK & VALIDATE
import { Formik } from 'formik';
// ## COMPONENTS
import InputField from '../FormFields/InputField';
import { FieldItem } from '../../interfaces/FieldItem.interface';
import { useFormFields } from '../../Hooks/useFormFields';

const QuizFormContainer = () => {
  //Getting fields for form
  const [formFields, setFormFields] = useState<FieldItem[]>(items);
  const [initValues, setInitValues] = useState({});
  const navigate = useNavigate();
  const { VITE_API_URI } = import.meta.env;
  const { initialValues, inputs, validationSchema } = getInputs(formFields);
  const onSubmit = async (): Promise<void> => {};

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => console.log(values)}
      >
        {() => (
          <Form noValidate>
            {/* {inputs
              ? inputs.map((field) => (
                  <InputField
                    key={field.name}
                    label={field?.label ? field?.label : ''}
                    inputName={field?.name ? field?.name : ''}
                    labelClassname="label-style"
                    inputClassname={'input-style'}
                    type={field?.type}
                  />
                ))
              : null} */}
            <button className="btn btn_submit" type="submit">
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default QuizFormContainer;
