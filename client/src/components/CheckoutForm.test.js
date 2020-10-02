import React from "react";
import { fireEvent, render, screen }from "@testing-library/react";
import App from "../App";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm/>) //rendering our component
    const title = screen.getByText(/checkout form/i);
   expect(title).toBeInTheDocument();
 // above checks that we do in fact have our checkout form title
});

test("form shows success message on submit with form details", () => {
    render(<CheckoutForm/>) // rendering our component
    // getting our data by their label
  const fName = screen.getByLabelText(/first name/i);
  const lName = screen.getByLabelText(/last name/i);
  const address = screen.getByLabelText(/address/i);
  const city = screen.getByLabelText(/city/i);
  const state = screen.getByLabelText(/state/i);
  const zip = screen.getByLabelText(/zip/i);
  const button = screen.getByRole("button", {name:/checkout/i})


// inputting our values 
   fireEvent.change(fName,{target:{value:"Luffy"}})
  fireEvent.change(lName,{target:{value:"Gon"}})
  fireEvent.change(address,{target:{value:"1234 IM LOST"}})
  fireEvent.change(city,{target:{value:"NO RETURN"}})
  fireEvent.change(state,{target:{value:"Two Roads Diverged"}})
  fireEvent.change(zip,{target:{value:"What do you want on your Tombstone(Pizza)"}})
  fireEvent.click(button,{button:1})
  
  const isMessageDisplayed = screen.getAllByText(/You have ordered some plants! Woo-hoo!/i) //A sanity check that we indeed do have our success message displayed
  //removing the fire event click should throw an error
});
