import { expect, afterEach } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

describe("something truthy and falsy", () => {
  // extends Vitest's expect method with methods from react-testing-library
  expect.extend(matchers);

  // runs a cleanup after each test case (e.g. clearing jsdom)
  afterEach(() => {
    cleanup();
  });
  it("true to be true", () => {
    expect(true).toBe(true);
  });

  it("false to be false", () => {
    expect(false).toBe(false);
  });
});

// it("should render Register component correctly", () => {
//   render(<Register />);
//   const element = screen.getByRole("heading", {
//     level: 2,
//   });
//   expect(element).toBeInTheDocument();
// });

// it("should test for presence of subheading in the component", () => {
//   render(<Register />);
//   const element = screen.getByRole("heading", {
//     name: /please enter your details below to register yourself\./i,
//   });
//   expect(element).toBeInTheDocument();
// });

// it("should show error message when all the fields are not entered", async () => {
//   render(<Register />);
//   const buttonElement = screen.getByRole("button", {
//     name: /register/i,
//   });
//   await userEvent.click(buttonElement);
//   const alertElement = screen.getByRole("alert");
//   expect(alertElement).toBeInTheDocument();
// });

// it("should not show any error message when the component is loaded", () => {
//   render(<Register />);
//   const alertElement = screen.queryByRole("alert");
//   expect(alertElement).not.toBeInTheDocument();
// });

// it("should show success message when the registration is successful.", async () => {
//   render(<Register />);
//   const buttonElement = screen.getByRole("button", {
//     name: /register/i,
//   });
//   await userEvent.click(buttonElement);
//   const alertElement = screen.getByRole("alert");
//   expect(alertElement).toBeInTheDocument();
// });
