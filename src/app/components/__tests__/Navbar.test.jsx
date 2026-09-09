import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Navbar from "../Navbar";

describe("Navbar", () => {
  it("opens the mobile menu overlay when the hamburger button is clicked", async () => {
    render(<Navbar />);

    expect(screen.queryAllByRole("link", { name: "About" })).toHaveLength(1);

    await userEvent.click(screen.getByRole("button"));

    expect(screen.queryAllByRole("link", { name: "About" })).toHaveLength(2);
  });
});
