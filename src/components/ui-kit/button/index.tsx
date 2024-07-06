import clsx from "clsx"
import { ButtonProps } from "./button.types.js"
import styles from "./styles.module.css"

export const Button = (props: ButtonProps) => {
  return (
    <div className={clsx(styles.buttonContainer)}>
      <button
        type="button"
        className={clsx(
          styles.button,
          props.size === "s"
            ? styles.s_size
            : props.size === "l"
              ? styles.l_size
              : styles.m_size,
        )}
        onClick={props.handleClick}
      >
        {props.title}
      </button>
    </div>
  )
}
