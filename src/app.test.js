import { fireEvent, render } from "@testing-library/react";
import App from "./App";

it("renders properly", function(){
    render(<App/>)
});

it("match snap", function(){
    const {asFragment, getByTestId} = render(<App/>);
    const rarrow = (getByTestId("1"));
    expect(asFragment()).toMatchSnapshot();
    fireEvent.click(getByTestId("1"));
    fireEvent.click(getByTestId("1"));
    fireEvent.click(getByTestId("1"));
    fireEvent.click(getByTestId("1"));
    expect(asFragment()).toMatchSnapshot();
    expect(rarrow).toHaveClass("hidden");
});
