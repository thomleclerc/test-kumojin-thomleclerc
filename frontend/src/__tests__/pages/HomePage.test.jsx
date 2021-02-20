import { render, screen } from "@testing-library/react";
import HomePage from "../../pages/HomePage";

test("renders title correctly", () => {
  render(<HomePage />);
  const titleElement = screen.getByText(/Thomas Leclerc/i);
  expect(titleElement).toBeInTheDocument();
});
