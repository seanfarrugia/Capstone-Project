import { render, screen } from "@testing-library/react";
import BookingForm from './index';

test('Renders the BookingForm heading', () => {
    render(<BookingForm />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

test("number_of_diners input has correct validation attributes", () => {
  render(<BookingForm formData={{}} onChange={() => {}} availableTimes={[]} />);

  const dinersInput = screen.getByLabelText(/number of diners/i);

  expect(dinersInput).toHaveAttribute("type", "number");
  expect(dinersInput).toHaveAttribute("min", "1");
  expect(dinersInput).toHaveAttribute("max", "12");
  expect(dinersInput).toBeRequired();
});

test("reservation_date input has required attribute", () => {
  render(<BookingForm formData={{}} onChange={() => {}} availableTimes={[]} />);
  const dateInput = screen.getByLabelText(/reservation date/i);
  expect(dateInput).toHaveAttribute("type", "date");
  expect(dateInput).toBeRequired();
});

test("reservation_time select is required", () => {
  render(<BookingForm formData={{}} onChange={() => {}} availableTimes={["18:00"]} />);
  const timeSelect = screen.getByLabelText(/reservation time/i);
  expect(timeSelect).toBeRequired();
});
