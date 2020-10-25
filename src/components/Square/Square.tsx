import React from "react"
import styles from "./Square.module.sass"

export enum SquareState {
  blank = "",
  x = "X",
  o = "O",
}

type SquareProps = {
  value?: SquareState
  onClick: () => void
}

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {
  return (
    <button className={styles.square} onClick={onClick}>
      {value}
    </button>
  )
}
