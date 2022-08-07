import styles from './input-field.module.scss';

export function InputField(): JSX.Element {
  return (
    <div className={styles.inputField}>
      <label htmlFor="">
        <input type="number" />
        <span>высота</span>
      </label>
    </div>
  )
}