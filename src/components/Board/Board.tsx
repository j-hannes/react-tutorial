import React from "react";
import { Square } from "../Square";

import styles from "./Board.module.css";

export class Board extends React.Component {
  renderSquare(i: number) {
    return <Square />;
  }

  render() {
    const status = "Next player: X";

    return (
      <div>
        <div className={styles.status}>{status}</div>
        <div className={styles.row}>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className={styles.row}>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className={styles.row}>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}
