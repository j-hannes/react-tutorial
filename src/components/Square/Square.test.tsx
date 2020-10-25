import React from "react"
import { render } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { Square } from "./Square"

test("renders a button react link", () => {
  const { queryByRole } = render(<Square />)
  const button = queryByRole("button")
  expect(button).not.toBeNull()
})

test("renders an X on click a square", () => {
  const { queryByRole, queryByText } = render(<Square />)
  const button = queryByRole("button")
  expect(queryByText("X")).toBe(null)
  userEvent.click(button)
  expect(queryByText("X")).not.toBe(null)
})
