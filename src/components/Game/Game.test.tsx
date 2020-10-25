import React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Game } from "./Game"
import { SquareState } from "../Square"

test("fills the squares", () => {
  // Given
  const { queryAllByRole } = render(<Game />)

  // Then
  expect(queryAllByRole("button")[4]).toHaveTextContent(SquareState.blank)

  // When
  userEvent.click(queryAllByRole("button")[4])

  // Then
  expect(queryAllByRole("button")[4]).toHaveTextContent(SquareState.x)

  // When
  userEvent.click(queryAllByRole("button")[8])

  // Then
  expect(queryAllByRole("button")[8]).toHaveTextContent(SquareState.o)
})

test("updates the status", () => {
  // Given
  const { queryAllByRole, queryByText } = render(<Game />)

  // Then
  expect(queryByText(`Next player: ${SquareState.o}`)).toBe(null)
  expect(queryByText(`Next player: ${SquareState.x}`)).not.toBe(null)

  // When
  userEvent.click(queryAllByRole("button")[0])

  // Then
  expect(queryByText(`Next player: ${SquareState.o}`)).not.toBe(null)
  expect(queryByText(`Next player: ${SquareState.x}`)).toBe(null)

  // When
  userEvent.click(queryAllByRole("button")[1])

  // Then
  expect(queryByText(`Next player: ${SquareState.x}`)).not.toBe(null)
  expect(queryByText(`Next player: ${SquareState.o}`)).toBe(null)
})
