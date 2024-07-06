import { TextboxProps } from "./textbox.types"
import styles from "./styles.module.css"

export const Textbox = (props: TextboxProps) => {
  return (
    <>
      <div className={styles.textboxContainer}>
        {props.label && (
          <label className={styles.textboxLabel} htmlFor={props.id}>
            {props.label}
          </label>
        )}
        <input
          type="text"
          id={props.id}
          name={props.name}
          placeholder={props.placeholder}
          className={styles.textboxInput}
        />
      </div>
    </>
  )
}
