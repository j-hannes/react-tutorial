import React from "react"
import { render } from "@testing-library/react"
import { Board } from "./Board"
import userEvent from "@testing-library/user-event"

test("fills the squares", () => {
  // Given
  const { queryAllByRole } = render(<Board />)

  // Then
  expect(queryAllByRole("button")[4]).toHaveTextContent("")

  // When
  userEvent.click(queryAllByRole("button")[4])

  // Then
  expect(queryAllByRole("button")[4]).toHaveTextContent("X")

  // When
  userEvent.click(queryAllByRole("button")[8])

  // Then
  expect(queryAllByRole("button")[8]).toHaveTextContent("O")
})

test("updates the status", () => {
  // Given
  const { queryAllByRole, queryByText } = render(<Board />)

  // Then
  expect(queryByText("Next player: O")).toBe(null)
  expect(queryByText("Next player: X")).not.toBe(null)

  // When
  userEvent.click(queryAllByRole("button")[0])

  // Then
  expect(queryByText("Next player: O")).not.toBe(null)
  expect(queryByText("Next player: X")).toBe(null)

  // When
  userEvent.click(queryAllByRole("button")[1])

  // Then
  expect(queryByText("Next player: O")).toBe(null)
  expect(queryByText("Next player: X")).not.toBe(null)
})
