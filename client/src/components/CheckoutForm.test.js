import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {});
test("form header renders", () => {
    render(<CheckoutForm />);
    const { getByTestId, findByTestId } = render(<CheckoutForm />);
  });


test("form shows success message on submit with form details", () => {
    const { getByLabelText, getByRole } = render(<CheckoutForm />);
  
    const firstName = getByLabelText(/first name/i);
    fireEvent.change(firstName, { target: { value: 'Homer'} });
  
    const lastName = getByLabelText(/last Name/i);
    fireEvent.change(lastName, { target: { value: 'Simpson'} });

    const address = getByLabelText(/address/i);
    fireEvent.change(address, { target: { value: '123 Lard Lad Lane'} });

    const city = getByLabelText(/city/i);
    fireEvent.change(city, { target: { value: 'Springfield'} });

    const state = getByLabelText(/state/i);
    fireEvent.change(state, { target: { value: 'MA'} });

    const zip = getByLabelText(/zip/i);
    fireEvent.change(zip, { target: { value: '12345'} });

    const button = getByRole('button', /submit/i);
    fireEvent.click(button);
});
