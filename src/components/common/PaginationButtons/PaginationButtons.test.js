import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import PaginationButtons from ".";

describe("PaginationButtons Component", () => {
  const onPageChange = jest.fn();
  it("does not render if the required props have not been passed", () => {
    const { queryAllByRole } = render(<PaginationButtons />);

    expect(queryAllByRole("button")).toHaveLength(0);
  });

  it("renders if the required props have been passed", () => {
    const { queryAllByRole, queryByTestId } = render(
      <PaginationButtons
        currentPage={1}
        onPageChange={onPageChange}
        pages={2}
      />
    );

    expect(queryAllByRole("button")).toHaveLength(4);
    const nextButton = queryByTestId("next-button");
    const prevButton = queryByTestId("prev-button");
    userEvent.click(nextButton);
    expect(onPageChange).toBeCalled();
    userEvent.click(prevButton);
    expect(onPageChange).toBeCalled();
  });
});
