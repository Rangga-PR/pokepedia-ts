import { screen, render } from "@testing-library/react";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../../../test-utils/router";
import { ThemeProvider } from "@emotion/react";
import theme from "../../../styles/theme";
import React from "react";
import Appbar from ".";
import Navicon from "./navicon";

test("render nav icon", () => {
  render(
    <ThemeProvider theme={theme}>
      <Navicon
        src="/assets/svg/backpack_black.svg"
        alt="backpack"
        href="/my-pokemon"
      />
    </ThemeProvider>
  );
  expect(screen.getByAltText("backpack")).toBeInTheDocument;
});

test("render back, home and bag button", () => {
  render(
    <ThemeProvider theme={theme}>
      <Appbar />
    </ThemeProvider>
  );
  expect(screen.getByAltText("back")).toBeInTheDocument;
  expect(screen.getByAltText("home")).toBeInTheDocument;
  expect(screen.getByAltText("backpack")).toBeInTheDocument;
});

test("has anchor tag to my pokemon page", () => {
  const router = createMockRouter({});
  render(
    <RouterContext.Provider value={router}>
      <ThemeProvider theme={theme}>
        <Appbar />
      </ThemeProvider>
    </RouterContext.Provider>
  );
  expect(
    screen.getByRole("link", { name: "backpack" }).getAttribute("href")
  ).toBe("/my-pokemon");
});

test("has anchor tag to my home page", () => {
  const router = createMockRouter({});
  render(
    <RouterContext.Provider value={router}>
      <ThemeProvider theme={theme}>
        <Appbar />
      </ThemeProvider>
    </RouterContext.Provider>
  );
  expect(screen.getByRole("link", { name: "home" }).getAttribute("href")).toBe(
    "/"
  );
});
