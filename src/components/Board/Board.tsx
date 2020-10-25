import React, { useCallback, useState } from "react"
import { Square } from "../Square"

import styles from "./Board.module.sass"

enum fill {
  blank = "",
  x = "X",
  o = "O",
}

const calculateWinner = (squares: fill[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]

  return lines.reduce((acc, [a, b, c]) => {
    if (acc) {
      return acc
    } else if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return squares[a]
    } else {
      return fill.blank
    }
  }, fill.blank)
}

export const Board: React.FC = () => {
  const [squares, setSquares] = useState(Array(9).fill(""))
  const [nextTurn, setNextTurn] = useState("X")

  const winner = calculateWinner(squares)

  let status

  if (winner) {
    status = `Winner: ${winner}`
  } else {
    status = `Next player: ${nextTurn}`
  }

  const handleClick = useCallback(
    (squareIndex: number) => {
      if (winner) return
      const nextSquares = squares.slice()
      nextSquares[squareIndex] = nextTurn
      setSquares(nextSquares)
      setNextTurn(nextTurn === fill.x ? fill.o : fill.x)
    },
    [squares, nextTurn, winner]
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
