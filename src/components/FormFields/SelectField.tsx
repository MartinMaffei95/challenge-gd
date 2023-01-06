import {
  ChangeEvent,
  ChangeEventHandler,
  FocusEventHandler,
  SetStateAction,
} from 'react';
import { Option } from '../../interfaces/FieldItem.interface';

interface SelectField {
  label: string;
  inputName: string;
  optGroup?: Option[];
  value: string;
  handleChange: ChangeEventHandler<HTMLSelectElement>;
  handleBlur: FocusEventHandler<HTMLSelectElement>;
  errorMessage?: string | null;
  inputClassname?: string;
  labelClassname?: string;
}

const SelectField = ({
  label,
  inputName,
  optGroup,
  value,
  handleBlur,
  handleChange,
  errorMessage,
  inputClassname,
  labelClassname,
}: SelectField) => {
  return (
    <div>
      <label
        htmlFor={inputName}
        className={labelClassname ? `${labelClassname}` : ''}
      >
        {label}
      </label>
      <select
        value={value}
        name={inputName}
        onChange={handleChange}
        onBlur={handleBlur}
        className={inputClassname ? `${inputClassname}` : ''}
      >
        {optGroup
          ? optGroup.map((opt) => {
              return (
                <>
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                </>
              );
            })
          : null}
      </select>
      {errorMessage ? <p>{errorMessage}</p> : null}
    </div>
  );
};

export default SelectField;
