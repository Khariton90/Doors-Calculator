import styles from './custom-input-checkbox.module.scss';
import cn from 'classnames';

type CustomInputCheckboxProps = {
  name: string,
  value?: boolean,
  type?: string,
  label?: string,
  size?: string,
  disabled?: boolean
}


export function CustomInputCheckbox({ type, name, label, size, disabled, value }: CustomInputCheckboxProps): JSX.Element {
  const classSizeCheckbox = size ? styles.little : styles.middle;

  return (
    <div className={cn(styles.checkboxField, classSizeCheckbox)}>
      <label>
        <input type={type || 'radio'} name={name} disabled={disabled} />
        <span><b>{label}</b></span>
      </label>
    </div>

  )
}