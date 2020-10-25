import React from "react"
import { render } from "@testing-library/react"
import { Square } from "./Square"

test("renders a buttong react link", () => {
  const { queryByRole } = render(<Square />)
  const button = queryByRole("button")
  expect(button).not.toBeNull()
})

test("renders a number inside a square", () => {
  const { queryByText } = render(<Square value={42} />)
  const square = queryByText("42")
  expect(square).not.toBeNull()
})
