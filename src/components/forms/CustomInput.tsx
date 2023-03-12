import { ReactElement, useState } from 'react';
import { useField, FieldHookConfig } from 'formik';

type CustomInputProps = FieldHookConfig<string> & {
  label: string;
};

function CustomInput(props: CustomInputProps): ReactElement {
  const [field, meta, helpers] = useField(props);
  const [isPasswordShown, setIsPasswordShown] = useState(false);

  const { name, id, placeholder, type, label } = props;
  const { value, onBlur, onChange } = field;
  const { touched, error } = meta;

  function togglePasswordShow(): void {
    setIsPasswordShown((prevState: boolean): boolean => !prevState);
  }

  function clearField(): void {
    helpers.setValue('', false);
  }

  const isPasswordField: boolean = type === 'password';

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <label htmlFor={id}>{label}</label>
      <div style={{ display: 'flex' }}>
        <input
          name={name}
          type={isPasswordShown ? 'text' : type}
          id={id}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          placeholder={placeholder}
          autoComplete="off"
          style={{ border: '1px solid black' }}
        />
        {isPasswordField ? (
          <button
            type="button"
            onClick={(): void => togglePasswordShow()}
            style={{ border: '1px solid black', marginLeft: '10px' }}
          >
            {isPasswordShown ? 'hide' : 'show'}
          </button>
        ) : (
          <button type="button" onClick={clearField} style={{ border: '1px solid black', marginLeft: '10px' }}>
            clear
          </button>
        )}
      </div>
      {error && touched && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default CustomInput;
