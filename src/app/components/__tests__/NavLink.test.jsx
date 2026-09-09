import { render, screen } from "@testing-library/react";
import NavLink from "../NavLink";

describe("NavLink", () => {
  it("renders the title as link text pointing to the given href", () => {
    render(<NavLink href="#about" title="About" />);

    const link = screen.getByRole("link", { name: "About" });
    expect(link).toHaveAttribute("href", "#about");
  });
});
