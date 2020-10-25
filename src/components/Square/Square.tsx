import React from "react"
import styles from "./Square.module.sass"

type SquareProps = {}

export const Square: React.FC<SquareProps> = () => {
  const [state, setState] = React.useState({ value: "" })
  return (
    <button className={styles.square} onClick={() => setState({ value: "X" })}>
      {state.value}
    </button>
  )
}
