import { CheckboxProps } from "./checkbox.types"
import styles from "./styles.module.css"
import clsx from "clsx"

export const Checkbox = (props: CheckboxProps) => {
  return (
    <div>
      <label htmlFor={props.id}>{props.title}</label>
      <input
        id={props.id}
        type="checkbox"
        name={props.name}
        value={props.checked}
        className={clsx(styles.checkbox)}
      />
    </div>
  )
}
