describe("Victory with row", function () {

  it("First row", function () {
    let board = [
      "X", "X", "X",
      " ", " ", " ",
      " ", " ", " "
    ];

    expect(checkForWinner(board)).toBe("X");
  });

  it("Second row", function () {
    let board = [
      " ", " ", " ",
      "X", "X", "X",
      " ", " ", " "
    ];

    expect(checkForWinner(board)).toBe("X");
  });
});