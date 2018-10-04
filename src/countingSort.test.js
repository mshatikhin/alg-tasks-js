const countingSort = (array, max) => {
  const counts = new Array(max + 1);
  counts.fill(0);
  array.forEach(value => counts[value]++);

  const result = [];
  let resultIndex = 0;

  counts.forEach((count, index) => {
    for (let i = 0; i < count; i++) {
      result[resultIndex] = index;
      resultIndex++;
    }
  });

  return result;
};

describe("Counting Sort", () => {
  it("Should implement counting sort", () => {
    expect(countingSort([4, 3, 2, 1, 0], 4)).toEqual([0, 1, 2, 3, 4]);
    expect(countingSort([4, 3, 1, 2, 3], 4)).toEqual([1, 2, 3, 3, 4]);
  });
});
