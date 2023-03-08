import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders freedom text", () => {
  render(<App />);
  const textFreedom = screen.getByText(/Özgürlük, Adalet, Eşitlik/);
  expect(textFreedom).toBeInTheDocument();
});
