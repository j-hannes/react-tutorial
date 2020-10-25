import React from "react"
import { render } from "@testing-library/react"
import { Board } from "./Board"

test("renders the status", () => {
  const { queryByText } = render(<Board />)
  const status = queryByText("Next player: X")
  expect(status).not.toBeNull()
})
