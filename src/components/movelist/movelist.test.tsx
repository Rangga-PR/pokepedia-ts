import { screen, render, cleanup } from "@testing-library/react";
import React from "react";
import MoveList from "./index";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../styles/theme";

const moves = [
  {
    name: "joget pedang",
    level: 20,
    method: "tutor",
  },
];

test("render move data", () => {
  render(
    <ThemeProvider theme={theme}>
      <MoveList moves={moves} color="#fff" />
    </ThemeProvider>
  );
  expect(screen.getByText("joget pedang")).toBeInTheDocument;
});

test("render loading skeleton", () => {
  render(
    <ThemeProvider theme={theme}>
      <MoveList moves={[]} loading color="#fff" />
    </ThemeProvider>
  );
  expect(screen.findByTestId("move-loading")).toBeInTheDocument;
});
