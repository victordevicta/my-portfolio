import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProjectsSection from "../ProjectsSection";

describe("ProjectsSection", () => {
  it("shows every project under the 'All' tag by default", () => {
    render(<ProjectsSection />);

    expect(screen.getByText("Pokedex")).toBeInTheDocument();
    expect(screen.getByText("Next.js Portfolio Website")).toBeInTheDocument();
  });

  it("keeps showing the matching projects when the 'Web' tag is selected", async () => {
    render(<ProjectsSection />);

    await userEvent.click(screen.getByText("Web"));

    expect(screen.getByText("Pokedex")).toBeInTheDocument();
    expect(screen.getByText("Next.js Portfolio Website")).toBeInTheDocument();
  });
});
