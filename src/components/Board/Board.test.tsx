import React from "react"
import { render } from "@testing-library/react"
import { Board } from "./Board"
import { SquareState } from "../Square"
import userEvent from "@testing-library/user-event"

test("renders the squares", () => {
  // Given
  const { queryAllByText } = render(
    <Board
      squares={[
        SquareState.o,
        SquareState.blank,
        SquareState.blank,
        SquareState.blank,
        SquareState.x,
        SquareState.blank,
        SquareState.blank,
        SquareState.blank,
        SquareState.o,
      ]}
      onClick={() => {}}
    />
  )

  // Then
  expect(queryAllByText(SquareState.x).length).toBe(1)
  expect(queryAllByText(SquareState.o).length).toBe(2)
})

test("calls onClick with square index", () => {
  // Given
  const onClick = jest.fn()
  const { queryAllByRole } = render(
    <Board squares={Array(9).fill(SquareState.blank)} onClick={onClick} />
  )

  // When
  userEvent.click(queryAllByRole("button")[4])

  // Then
  expect(onClick).toHaveBeenCalledWith(4)
})
