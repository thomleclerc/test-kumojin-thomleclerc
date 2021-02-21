import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders all the child components correctly", () => {
  render(<App />);
  const titleElement = screen.getByText(/Thomas/i);
  expect(titleElement).toBeInTheDocument();
});
