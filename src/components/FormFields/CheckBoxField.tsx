import { FormikErrors } from 'formik';
import { ChangeEventHandler, FocusEventHandler, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

interface CheckBoxField {
  label: string;
  inputName: string;
  type?: string;
  placeholder?: string;
  value: boolean;
  // handleChange: ChangeEventHandler<HTMLInputElement>;
  handleChange: Function;
  handleBlur: FocusEventHandler<HTMLInputElement>;
  errorMessage?: string | null;

  inputClassname?: string;
  labelClassname?: string;
  icon?: JSX.Element;
  iconPosition?: string;
  iconFX?: Function;
}

const CheckBoxField = ({
  label,
  inputName,
  type,
  placeholder,
  value = false,
  handleBlur,
  handleChange,
  errorMessage,
  inputClassname,
  labelClassname,
  icon,
  iconPosition,
  iconFX,
}: CheckBoxField) => {
  console.log(value);
  const [inputVal, setInputVal] = useState<boolean>(false);
  const handleValue = () => {
    handleChange(inputName, !value);
  };
  return (
    <>
      <div className="relative flex flex-row-reverse justify-center w-full pl-8 ">
        <label
          htmlFor={inputName}
          className={labelClassname ? `${labelClassname}` : ''}
        >
          {label}
        </label>
        <input
          type={type ? type : 'text'}
          placeholder={placeholder ? placeholder : ''}
          name={inputName}
          checked={value ? true : false}
          onBlur={handleBlur}
          onChange={handleValue}
          className={inputClassname ? `${inputClassname}` : ''}
        />
        <span
          onClick={() => iconFX && iconFX()}
          className="absolute z-1000000 text-primary-800 text-2xl right-0 top-0 m-2"
        >
          {icon ? icon : null}
        </span>
        {/* iconPosition */}
      </div>
      {errorMessage ? (
        <p className="error-alert">
          <FiAlertCircle /> {errorMessage}
        </p>
      ) : null}
    </>
  );
};

export default CheckBoxField;
