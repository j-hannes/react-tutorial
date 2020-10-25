import React from "react"
import styles from "./Square.module.sass"

type SquareProps = {
  value?: string
  onClick: () => void
}

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  )
}
