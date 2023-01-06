import { ChangeEventHandler, FocusEventHandler } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

interface CheckBoxField {
  label: string;
  inputName: string;
  type?: string;
  placeholder?: string;
  value: boolean;
  handleChange: ChangeEventHandler<HTMLInputElement>;
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
  value,
  handleBlur,
  handleChange,
  errorMessage,
  inputClassname,
  labelClassname,
  icon,
  iconPosition,
  iconFX,
}: CheckBoxField) => {
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
          onChange={handleChange}
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
        <p className="text-red-600 pl-4 flex min-h-full items-center justify-start">
          <FiAlertCircle /> {errorMessage}
        </p>
      ) : null}
    </>
  );
};

export default CheckBoxField;
