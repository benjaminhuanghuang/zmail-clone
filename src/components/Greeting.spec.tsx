import { render, screen } from "@testing-library/react";
// Component to test
import Greeting from "./Greeting";

describe("Greeting", () => {
  it("renders default greeting when no name is provided", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello!")).toBeInTheDocument();
  });
});
