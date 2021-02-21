import { render, screen } from "@testing-library/react";
import HomePage from "../../pages/HomePage";

test("renders title correctly", () => {
  render(<HomePage />);

  const titleElement = screen.getByText(/Thomas Leclerc/i);
  const linkElement = screen.getByText(/Kumojin/i);

  expect(titleElement).toBeInTheDocument();
  expect(linkElement).toBeInTheDocument();
});

test("renders instructions correctly", () => {
  render(<HomePage />);

  const instructionsElement = screen.getByTestId("instructions-container");

  expect(instructionsElement).toBeInTheDocument();
});

test("renders local & server datetime correctly", () => {
  render(<HomePage />);

  const localDatetimeElement = screen.getByTestId("local-dateTime");
  const serverDatetimeElement = screen.getByTestId("server-dateTime");

  expect(localDatetimeElement).toBeInTheDocument();
  expect(serverDatetimeElement).toBeInTheDocument();
});

test("renders spinner when is loading is true", () => {
  render(<HomePage isLoading={true} />);

  const spinnerElement = screen.getByTestId("spinner");

  expect(spinnerElement).toBeInTheDocument();
});

test("should not renders spinner when is loading is false", () => {
  render(<HomePage isLoading={false} />);

  const spinnerElement = screen.getByTestId("spinner");

  expect(spinnerElement).toBeInTheDocument();
});
