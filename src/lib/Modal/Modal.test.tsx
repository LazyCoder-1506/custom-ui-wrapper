import { render, screen } from "@testing-library/react";
import Modal from "./Modal";
import userEvent from "@testing-library/user-event";

describe('Modal', () => {
  let mockCloseHandler: () => any;

  beforeEach(() => {
    mockCloseHandler = jest.fn();
  });

  it("should not be visible when open prop is false", () => {
    render(
      <Modal open={false} closeHandler={mockCloseHandler}>
        Hello world
      </Modal>
    );

    const modalBody = screen.queryByText("Hello World");
    expect(modalBody).toBeFalsy();
  });

  it("should be visible with correct children when open prop is true", () => {
    render(
      <Modal open={true} closeHandler={mockCloseHandler}>
        Modal is Open
      </Modal>
    );

    const modalBody = screen.queryByText("Modal is Open");
    expect(modalBody).toBeInTheDocument();
  });

  it("should have correct title when open", () => {
    render(
      <Modal open={true} closeHandler={mockCloseHandler} title="Modal Title">
        Hello world
      </Modal>
    );

    const modalTitle = screen.queryByText("Modal Title");
    expect(modalTitle).toBeInTheDocument();
  });

  it("should call closeHandler function when close button is clicked", () => {
    render(
      <Modal open={true} closeHandler={mockCloseHandler}>
        Hello world
      </Modal>
    );

    expect(mockCloseHandler).toHaveBeenCalledTimes(0);
    const closeButton = screen.getByTestId("btn-close");
    userEvent.click(closeButton);
    expect(mockCloseHandler).toHaveBeenCalledTimes(1);
  });

  it("should allow functions passed as props of children to be called", () => {
    const mockChildrenFunction = jest.fn();

    render(
      <Modal open={true} closeHandler={mockCloseHandler}>
        <h1>Hello world</h1>
        <button type="button" onClick={mockChildrenFunction}>Click Me</button>
      </Modal>
    );

    expect(mockChildrenFunction).toHaveBeenCalledTimes(0);
    const childButton = screen.getByText("Click Me");
    userEvent.click(childButton);
    expect(mockChildrenFunction).toHaveBeenCalledTimes(1);
  });
});