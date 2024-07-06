import { CheckboxProps } from "./checkbox.types"
import styles from "./styles.module.css"

export const Checkbox = (props: CheckboxProps) => {
  return (
    <div key={props.id} className={styles.checkboxContainer}>
      <label htmlFor={props.id} className={styles.checkboxLabel}>
        {props.title}
        <span className={styles.checkbox} />
      </label>
      <input
        id={props.id}
        type="checkbox"
        name={props.name}
        value={props.checked}
        className={styles.checkboxInput}
      />
    </div>
  )
}
