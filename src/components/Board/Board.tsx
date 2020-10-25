import React from "react"
import { Square } from "../Square"

import styles from "./Board.module.css"

export const Board: React.FC = () => {
  function renderSquare(i: number) {
    return <Square value={i} />
  }

  const status = "Next player: X"

  return (
    <div>
      <div className={styles.status}>{status}</div>
      <div className={styles.row}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className={styles.row}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className={styles.row}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  )
}
