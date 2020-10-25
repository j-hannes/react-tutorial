import React, { useCallback } from "react"
import { Square, SquareState } from "../Square"

import styles from "./Board.module.sass"

type BoardProps = {
  squares: SquareState[]
  onClick: (squareIndex: number) => void
}

export const Board: React.FC<BoardProps> = ({ squares, onClick }) => {
  const renderSquare = useCallback(
    (squareIndex: number) => {
      return (
        <Square
          value={squares[squareIndex]}
          onClick={() => onClick(squareIndex)}
        />
      )
    },
    [squares, onClick]
  )

  return (
    <div>
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
