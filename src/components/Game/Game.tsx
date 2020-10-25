import React, { useCallback, useState } from "react"
import { Board } from "../Board"
import { SquareState } from "../Square"

import styles from "./Game.module.sass"

const calculateWinner = (squares: SquareState[]) => {
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

  return lines.reduce(
    (acc, [a, b, c]) => {
      if (acc[0]) {
        return acc
      } else if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return [squares[a], [a, b, c]]
      } else {
        return acc
      }
    },
    [SquareState.blank, [] as number[]]
  )
}

const getNextTurn = (value: SquareState) =>
  value === SquareState.x ? SquareState.o : SquareState.x

export const Game: React.FC = () => {
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(SquareState.blank),
      nextTurn: SquareState.x,
    },
  ])

  const lastState = history[history.length - 1]

  const [winner, winningLine] = calculateWinner(lastState.squares)

  let status
  if (winner) {
    status = `Winner: ${winner}`
  } else if (history.length > 9) {
    status = `Draw!`
  } else {
    status = `Next player: ${lastState.nextTurn}`
  }

  const handleClick = useCallback(
    (squareIndex: number) => {
      if (winner || lastState.squares[squareIndex]) return
      const squares = lastState.squares.slice()
      squares[squareIndex] = lastState.nextTurn
      const nextTurn = getNextTurn(lastState.nextTurn)
      setHistory((prevState) => [...prevState, { squares, nextTurn }])
    },
    [lastState, winner]
  )

  const goToStep = useCallback((stepIndex: number) => {
    setHistory((prevState) => prevState.slice(0, stepIndex))
  }, [])

  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board
          squares={lastState.squares}
          winningLine={winningLine as number[]}
          onClick={handleClick}
        />
      </div>
      <div className={styles.gameInfo}>
        <div className={styles.status}>{status}</div>
        <ol>
          {history.slice(1).map((state, index) => (
            <li key={index}>
              <button onClick={() => goToStep(index + 1)}>
                Go to step {index}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
