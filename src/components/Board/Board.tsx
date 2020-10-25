import React, { useCallback, useState } from "react"
import { Square } from "../Square"

import styles from "./Board.module.sass"

export const Board: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(""))

  const handleClick = useCallback(
    (squareIndex: number) => {
      const nextSquares = squares.slice()
      nextSquares[squareIndex] = "X"
      setSquares(nextSquares)
    },
    [squares]
  )

  const renderSquare = useCallback(
    (squareIndex: number) => {
      return (
        <Square
          value={squares[squareIndex]}
          onClick={() => handleClick(squareIndex)}
        />
      )
    },
    [squares, handleClick]
  )

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
