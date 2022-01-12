import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

import Pagination from "./Pagination";

describe("tests Pagination", () => {
  it("should render component", async () => {
    // Arrange
    const tree = renderer.create(<Pagination />).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });

  describe("display", () => {
    it("should display pagination", async () => {
      // Act

      render(<Pagination />);

      // Assert
      expect(screen.getByTestId("next").textContent).toEqual("Next");
      expect(screen.getByTestId("prev").textContent).toEqual("Previous");
    });
  });
});
