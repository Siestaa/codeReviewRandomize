import { useState } from "react"
import { Checkbox } from "../../ui-kit/checkbox"
import styles from "./styles.module.css"
import { Button } from "../../ui-kit/button"
import { Textbox } from "../../ui-kit/textbox"
import { clsx } from "clsx"

export const Developers = () => {
  const developersList = [
    { id: "003", name: "Иваненко Алексей Романович" },
    { id: "004", name: "Парфенцов Илья Александрович" },
    { id: "001", name: "Спицына Анна Олеговна" },
    { id: "002", name: "Калинин Никита Евгеньевич" },
  ]
  const [addDev, setAddDev] = useState(false)
  const [deleteDev, setDeleteDev] = useState(false)

  return (
    <>
      <div className={styles.developersArrow}>
        {"1. Выберите разработчиков"}
      </div>
      <div className={styles.developersContainer}>
        {developersList.map((developer) => (
          <Checkbox
            title={developer.name}
            name={developer.name}
            id={developer.id}
            key={developer.id}
          />
        ))}
      </div>
      <div className={styles.developersButtons}>
        <div
          className={clsx(styles.buttonContainer, addDev && styles.withInput)}
        >
          <Button
            title={addDev ? "Добавить" : "Добавить разработчика"}
            size="s"
            handleClick={() => setAddDev(!addDev)}
          />
          <Textbox
            id="newDeveloper"
            name="newDeveloper"
            placeholder="Фамилия Имя Отчество"
          />
        </div>
        <div className={styles.buttonContainer}>
          <Button
            title="Удалить разработчика"
            size="s"
            handleClick={() => setDeleteDev(!deleteDev)}
          />
        </div>
      </div>
    </>
  )
}
