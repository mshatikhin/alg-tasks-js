const twoSum = (arr, num) => {
  const pairs = [];
  const store = [];

  for (let part1 of arr) {
    const part2 = num - part1;
    if (store.indexOf(part2) !== -1) pairs.push([part1, part2]);
    store.push(part1);
  }

  return pairs;
};

describe("Two Sum", () => {
  it("Should implement two sum", () => {
    expect(twoSum([1, 2, 2, 3, 4], 4)).toEqual([[2, 2], [3, 1]]);
  });
});
