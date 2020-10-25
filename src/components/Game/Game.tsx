import React from "react"
import { Board } from "../Board"

import styles from "./Game.module.css"

export const Game: React.FC = () => {
  return (
    <div className={styles.game}>
      <div className={styles.gameBoard}>
        <Board />
      </div>
      <div className={styles.gameInfo}>
        <div>{/* status */}</div>
        <ol>{/* TODO */}</ol>
      </div>
    </div>
  )
}
