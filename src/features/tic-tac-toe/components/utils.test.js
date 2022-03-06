import { calculateLocation } from "./utils";

describe("calculating the location of a move on the board", () => {
  // Given a board that looks like this
  // [ 0, 1, 2,
  //   3, 4, 5,
  //   6, 7, 8 ]
  // and a location on that board (a number between 1 and 9)
  // it return the column and row of that location in a two item array
  // as [row, column].
  it("determines the row and column of a valid move", () => {
    expect(calculateLocation(5)).toEqual({ row: 2, column: 3 });

    expect(calculateLocation(1)).toEqual({ row: 1, column: 2 });

    expect(calculateLocation(6)).toEqual({ row: 3, column: 1 });
  });
  it("throws an error when given an invalid move, i.e. index less than 0", () => {
    expect(() => {
      calculateLocation(-1);
    }).toThrow(
      "Can't have move of index -1. Move in 3 x 3 board must have an index between 0 and 8."
    );
  });

  it("throws an error when given an invalid move, i.e. index greater than 9", () => {
    expect(() => {
      calculateLocation(10);
    }).toThrow(
      "Can't have move of index 10. Move in 3 x 3 board must have an index between 0 and 8."
    );
  });

  it("throws an error when given an invalid move, i.e. index that's not an int", () => {
    expect(() => {
      calculateLocation("noo");
    }).toThrow(
      "Can't have move of index noo. Move in 3 x 3 board must have an index between 0 and 8."
    );
    expect(() => {
      calculateLocation();
    }).toThrow(
      "Can't have move of index undefined. Move in 3 x 3 board must have an index between 0 and 8."
    );
    expect(() => {
      calculateLocation([]);
    }).toThrow(
      "Can't have move of index . Move in 3 x 3 board must have an index between 0 and 8."
    );
  });
});
