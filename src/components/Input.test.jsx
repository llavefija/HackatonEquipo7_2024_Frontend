import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi } from "vitest";
import Input from "./Input";

describe("Input component", () => {
  it("renders the input with the correct label and attributes", () => {
    render(
      <Input
        label="Test Label"
        id="test-input"
        type="text"
        placeholder="Test Placeholder"
        value=""
        onChange={() => {}}
      />
    );

    expect(screen.getByLabelText("Test Label")).toBeInTheDocument();

    const inputElement = screen.getByLabelText("Test Label");
    expect(inputElement).toHaveAttribute("id", "test-input");

    expect(inputElement).toHaveAttribute("placeholder", "Test Placeholder");
  });

  it("calls onChange when the input value changes", () => {
    const handleChange = vi.fn();

    render(
      <Input
        label="Test Label"
        id="test-input"
        type="text"
        placeholder="Test Placeholder"
        value=""
        onChange={handleChange}
      />
    );

    const inputElement = screen.getByLabelText("Test Label");
    fireEvent.change(inputElement, { target: { value: "new value" } });

    expect(handleChange).toHaveBeenCalled();
  });

  it("renders with the correct value passed via props", () => {
    render(<Input label="Test Label" id="test-input" type="text" value="preset value" onChange={() => {}} />);

    const inputElement = screen.getByLabelText("Test Label");
    expect(inputElement).toHaveValue("preset value");
  });
});
