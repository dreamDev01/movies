import renderer, { act } from "react-test-renderer";
import { render, screen } from "@testing-library/react";

import MovieDetails from "./MovieDetails";

import { movies } from "../../data/movies";

describe("tests MovieDetails", () => {
  const props = {
    movie: movies[0],
  };
  it("should render component", async () => {
    // Arrange
    const tree = renderer.create(<MovieDetails {...props} />).toJSON();

    // Assert
    expect(tree).toMatchSnapshot();
  });

  describe("display", () => {
    it("should display movie details", async () => {
      // Act
      await act(async () => {
        render(<MovieDetails {...props} />);
      });

      const by = props.movie.by.join(", ");
      const actors = props.movie.actors.join(", ");

      // Assert
      expect(screen.getByTestId("Par").title).toEqual(by);
      expect(screen.getByTestId("Avec").title).toEqual(actors);
      expect(screen.getByTestId("Synopsis").title).toEqual(
        props.movie.synopsis
      );
    });
  });
});
