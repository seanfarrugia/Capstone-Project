import { initializeTimes, updateTimes } from "./index";

global.fetchAPI = jest.fn();

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
