import { render, screen } from "@testing-library/react";
import {describe} from "vitest";
// Component to test
import Greeting from "./Greeting";

describe("Greeting", () => {
  it("renders default greeting when no name is provided", () => {
    render(<Greeting />);
    expect(screen.getByText("Hello!")).toBeInTheDocument();
  });

  it("renders personalized greeting when name is provided", () => {
    render(<Greeting name="Alice" />);
    expect(screen.getByText("Hello, Alice!")).toBeInTheDocument();
  });

  it("renders personalized greeting with empty string name", () => {
    render(<Greeting name="" />);
    expect(screen.getByText("Hello!")).toBeInTheDocument();
  });

  it("renders personalized greeting with whitespace name", () => {
    render(<Greeting name=" " />);
    expect(screen.getByText("Hello,  !")).toBeInTheDocument();
  });
});
