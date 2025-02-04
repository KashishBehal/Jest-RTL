import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Counter from "./Counter"; 
//jest was developed by facebook
//react testing library is build on top of jest 

//unit testing=> jest
//UI testing=>React Testing Library
describe("Counter", () => {
  it("counter displays initial count", () => {

    const {getByTestId}=render(<Counter initialCount={0}/>)
   
    const countValue = Number(getByTestId("count").textContent);

    expect(countValue).toEqual(0);
  });


  it("Count should decremnt by 1 ", () => {

    const {getByTestId , getByRole}=render(<Counter initialCount={0}/>)
   const decrementBtn=getByRole("button" ,{name:"Decrement"});
    fireEvent.click(decrementBtn)

    const countValue = Number(getByTestId("count").textContent);

    expect(countValue).toEqual(-1);
  });


  it("Count should reset to 0 ", () => {

    const {getByTestId , getByRole}=render(<Counter initialCount={0}/>)
   const reset=getByRole("button" ,{name:"Restart"});
    fireEvent.click(reset)

    const countValue = Number(getByTestId("count").textContent);

    expect(countValue).toEqual(0);
  });
});
