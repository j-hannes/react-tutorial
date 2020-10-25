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
  highlight?: boolean
  onClick: () => void
}

export const Square: React.FC<SquareProps> = ({
  value,
  highlight,
  onClick,
}) => {
  return (
    <button
      className={clsx(styles.square, highlight && styles.highlight)}
      onClick={onClick}
    >
      {value}
    </button>
  )
}
