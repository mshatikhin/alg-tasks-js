const pyramid = number => {
  let levels = "";
  const midpoint = Math.floor((2 * number - 1) / 2);

  for (let row = 0; row < number; row++) {
    let level = "";
    for (let column = 0; column < 2 * number - 1; column++)
      level += midpoint - row <= column && column <= midpoint + row ? "#" : " ";
    levels += level + "\n";
  }

  return levels;
};

const pyramid2 = (number, row = 0, level = "", levels = "") => {
  if (number === row) return levels;

  if (2 * number - 1 === level.length)
    return pyramid2(number, row + 1, "", levels + level + "\n");

  const midpoint = Math.floor((2 * number - 1) / 2);
  return pyramid2(
    number,
    row,
    level +
      (midpoint - row <= level.length && level.length <= midpoint + row
        ? "#"
        : " "),
    levels
  );
};

describe("Pyramid", () => {
  it("Should print pyramid", () => {
    expect(pyramid(3)).toBe("  #  \n ### \n#####\n");
    expect(pyramid2(3)).toBe("  #  \n ### \n#####\n");
  });
});
