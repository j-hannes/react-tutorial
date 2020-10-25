import React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Square, SquareState } from "./Square"

test("renders a button react link", () => {
  const { queryByRole } = render(<Square onClick={() => {}} />)
  const button = queryByRole("button")
  expect(button).not.toBeNull()
})

test("renders a value inside a square", () => {
  const { queryByText } = render(
    <Square value={SquareState.o} onClick={() => {}} />
  )
  expect(queryByText(SquareState.o)).not.toBeNull()
})

test("calls onClick on click", () => {
  const onClick = jest.fn()
  const { queryByRole } = render(<Square onClick={onClick} />)
  expect(onClick).not.toHaveBeenCalled()
  userEvent.click(queryByRole("button"))
  expect(onClick).toHaveBeenCalledTimes(1)
})
