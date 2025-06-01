import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  afterEach,
  beforeEach,
  createExpect,
  describe,
  expect,
  it,
  vi,
} from "vitest";
import Login from "./Login.jsx";
import React from "react";

describe("Login Component", () => {
  let fetchSpy;
  beforeEach(() => {
    fetchSpy = vi.spyOn(global, "fetch");
  });

  afterEach(() => {
    fetchSpy.mockRestore();
  });

  it("calls fetch with correct URL", async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: true,
      json: async () => ({ name: "Billy" }),
    });
    render(<Login />);

    fireEvent.change(screen.getByLabelText("username"), {
      target: { value: "Billy" },
    });

    fireEvent.click(screen.getByText("Log in"));

    const alert = await screen.findByRole("alert");
    expect(alert).toHaveTextContent("Welcome, Billy");
    expect(fetchSpy).toHaveBeenCalledWith("https://www.google.com");
  });
});
