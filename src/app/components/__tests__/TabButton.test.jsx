import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TabButton from "../TabButton";

describe("TabButton", () => {
  it("renders its children label", () => {
    render(
      <TabButton active={false} selectTab={() => {}}>
        Skills
      </TabButton>
    );
    expect(screen.getByText("Skills")).toBeInTheDocument();
  });

  it("calls selectTab when clicked", async () => {
    const selectTab = jest.fn();
    render(
      <TabButton active={false} selectTab={selectTab}>
        Skills
      </TabButton>
    );

    await userEvent.click(screen.getByText("Skills"));

    expect(selectTab).toHaveBeenCalledTimes(1);
  });

  it("highlights the label when active", () => {
    render(
      <TabButton active={true} selectTab={() => {}}>
        Skills
      </TabButton>
    );
    expect(screen.getByText("Skills")).toHaveClass("text-brass-300");
  });
});
