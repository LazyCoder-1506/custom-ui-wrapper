import { render, screen } from "@testing-library/react";
import Button from "./Button";
import userEvent from "@testing-library/user-event";

describe("Button", () => {
  it("should render with the correct text", () => {
    const mockFunction = jest.fn();
    render(
      <Button clickHandler={mockFunction}>
        Hello World
      </Button>
    );

    const buttonElement = screen.getByText("Hello World");
    expect(buttonElement).toBeInTheDocument();
  });

  it("should call the clickHandler function passed in props", () => {
    const mockFunction = jest.fn();
    render(
      <Button clickHandler={mockFunction}>
        Click Me
      </Button>
    );

    const buttonElement = screen.getByText("Click Me");
    expect(buttonElement).toBeInTheDocument();

    userEvent.click(buttonElement);
    expect(mockFunction).toHaveBeenCalledTimes(1);
  });
});