import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { initializeTimes, updateTimes } from "./index";

beforeEach(() => {
  global.fetchAPI = jest.fn(() => ["17:00", "18:00"]);
  global.submitAPI = jest.fn(() => true);
});

import BookingPage from "./index";

describe("BookingPage reducer functions", () => {
  beforeEach(() => {
    fetchAPI.mockReset();
  });

  test("initializeTimes returns expected values from fetchAPI", () => {
    const mockTimes = ["17:00", "18:00", "19:00"];
    fetchAPI.mockReturnValue(mockTimes);
    const result = initializeTimes();

    expect(fetchAPI).toHaveBeenCalledWith(expect.any(Date));
    expect(result).toEqual(mockTimes);
  });

  test("updateTimes calls fetchAPI with the provided date", () => {
    const mockTimes = ["20:00", "21:00"];
    fetchAPI.mockReturnValue(mockTimes);

    const initialState = ["17:00", "18:00"];
    const action = { type: "dateChange", date: "2025-09-01" };
    const result = updateTimes(initialState, action);
    
    expect(fetchAPI).toHaveBeenCalledWith(new Date("2025-09-01"));
    expect(result).toEqual(mockTimes);
  });

  test("updateTimes returns state unchanged for unknown action", () => {
    const initialState = ["17:00", "18:00"];
    const action = { type: "other" };

    const result = updateTimes(initialState, action);

    expect(result).toBe(initialState);
  });
});


describe("BookingPage validations", () => {
  test("submit button is disabled until all fields are filled", async () => {
    render(
      <MemoryRouter>
        <BookingPage />
      </MemoryRouter>
    );

    expect(screen.getByRole("button", { name: /book a table/i })).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/ocassion/i), {
      target: { value: "dinner" },
    });
    fireEvent.change(screen.getByLabelText(/number of diners/i), {
      target: { value: "4" },
    });
    fireEvent.change(screen.getByLabelText(/reservation date/i), {
      target: { value: "2025-09-01" },
    });
    fireEvent.change(await screen.findByLabelText(/reservation time/i), {
      target: { value: "18:00" },
    });

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /book a table/i })).not.toBeDisabled();
    });

    fireEvent.click(screen.getByRole("button", { name: /book a table/i }));
    expect(global.submitAPI).toHaveBeenCalled();
  });
})