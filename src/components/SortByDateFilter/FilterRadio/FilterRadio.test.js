import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import FilterRadio from "./FilterRadio";

describe("tests FilterRadio", () => {
  const props = {
    value: "asc",
    label: "Ascending",
    handleChange: jest.fn(),
    checked: false,
  };
  it("should render component", async () => {
    // Arrange
    const tree = renderer.create(<FilterRadio {...props} />).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });

  describe("display", () => {
    it("should display filter radio", async () => {
      // Act

      render(<FilterRadio {...props} />);

      // Assert
      expect(screen.getByText(props.label)).toBeInTheDocument();
      expect(screen.getByTestId(props.value).checked.toString()).toEqual(
        "false"
      );
    });
  });
});
