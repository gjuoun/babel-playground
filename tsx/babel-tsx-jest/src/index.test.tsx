import React from "react";
import "@testing-library/jest-dom";
import DiceRoll from "./index";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
test("should render dice roll", () => {
  render(<DiceRoll />);

  expect(screen.getByText("hey")).toHaveTextContent(
    "hey"
  );
});
