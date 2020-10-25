import React from "react"
import styles from "./Square.module.sass"

type SquareProps = {
  value?: number
}

export const Square: React.FC<SquareProps> = ({ value }) => {
  return (
    <button className={styles.square} onClick={() => alert("click")}>
      {value}
    </button>
  )
}
