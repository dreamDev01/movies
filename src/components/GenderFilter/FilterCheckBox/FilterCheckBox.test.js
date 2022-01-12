import renderer, { act } from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import FilterCheckBox from "./FilterCheckBox";

describe("tests FilterCheckBox", () => {
  const props = {
    name: "Drama",
    label: "Dramatique",
    count: 2,
    onSelect: jest.fn(),
    onUnSelect: jest.fn(),
  };
  it("should render component", async () => {
    // Arrange
    const tree = renderer.create(<FilterCheckBox {...props} />).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });

  describe("display", () => {
    it("should display filter checkbox", async () => {
      // Act
      await act(async () => {
        render(<FilterCheckBox {...props} />);
      });

      // Assert
      expect(
        screen.getByText(props.label + " (" + props.count + ")")
      ).toBeInTheDocument();
      expect(screen.getByTestId(props.name).checked.toString()).toEqual(
        "false"
      );
    });
  });
});
