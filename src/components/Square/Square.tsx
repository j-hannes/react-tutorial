import React from "react"
import clsx from "clsx"
import styles from "./Square.module.sass"

export enum SquareState {
  blank = "",
  x = "X",
  o = "O",
}

type SquareProps = {
  value?: SquareState
  won?: boolean
  onClick: () => void
}

export const Square: React.FC<SquareProps> = ({ value, won, onClick }) => {
  return (
    <button
      className={clsx(
        styles.square,
        won && styles.won
        // value && styles.highlight
      )}
      onClick={onClick}
    >
      {value}
    </button>
  )
}
