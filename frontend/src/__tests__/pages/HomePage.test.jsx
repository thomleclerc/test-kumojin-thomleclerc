import { render, screen } from "@testing-library/react";
import HomePage from "../../pages/HomePage";

test("renders title correctly", () => {
  render(<HomePage />);

  const titleElement = screen.getByText(/Thomas Leclerc/i);
  const linkElement = screen.getByText(/Kumojin/i);

  expect(titleElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});

test("renders title link correctly", () => {
  render(<HomePage />);
});
