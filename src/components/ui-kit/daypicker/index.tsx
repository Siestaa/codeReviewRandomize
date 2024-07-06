import { DaypickerProps } from "./daypicker.types"
import styles from "./styles.module.css"

export const Daypiker = (props: DaypickerProps) => {
  return (
    <>
      <div className={styles.daypickerContainer}>
        {props.label && (
          <label className={styles.daypickerLabel} htmlFor={props.id}>
            {props.label}
          </label>
        )}
        <input
          className={styles.daypickerInput}
          type="date"
          id={props.id}
          name={props.name}
        />
      </div>
    </>
  )
}
