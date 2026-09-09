import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectTag from "../ProjectTag";

describe("ProjectTag", () => {
  it("renders the tag name", () => {
    render(<ProjectTag name="Web" onClick={() => {}} isSelected={false} />);
    expect(screen.getByText("Web")).toBeInTheDocument();
  });

  it("calls onClick with its name when clicked", async () => {
    const onClick = jest.fn();
    render(<ProjectTag name="Web" onClick={onClick} isSelected={false} />);

    await userEvent.click(screen.getByText("Web"));

    expect(onClick).toHaveBeenCalledWith("Web");
  });

  it("applies selected styling when isSelected is true", () => {
    render(<ProjectTag name="All" onClick={() => {}} isSelected={true} />);
    expect(screen.getByText("All")).toHaveClass("text-bronze-950");
  });
});
