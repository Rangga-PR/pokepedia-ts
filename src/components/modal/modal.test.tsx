import { screen, render } from "@testing-library/react";
import React, { ReactNode, ReactPortal } from "react";
import ReactDOM from "react-dom";
import Modal from ".";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../styles/theme";

beforeAll(() => {
  ReactDOM.createPortal = jest.fn((node: ReactNode): ReactPortal => {
    return node as ReactPortal;
  });
});

afterAll(() => {
  jest.clearAllMocks();
});

test("render modal with content", () => {
  render(
    <ThemeProvider theme={theme}>
      <Modal isOpen={true} setIsOpen={jest.fn()}>
        test
      </Modal>
    </ThemeProvider>
  );

  expect(screen.getByText("test")).toBeInTheDocument;
});
