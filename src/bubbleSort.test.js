const bubbleSort = array => {
  let swapped;
  do {
    swapped = false;
    array.forEach((number, index) => {
      if (number > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        swapped = true;
      }
    });
  } while (swapped);
  return array;
};

function bubbleSort2(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        const less = array[j + 1];
        array[j + 1] = array[j];
        array[j] = less;
      }
    }
  }

  return array;
}

describe("Bubble Sort", () => {
  it("Should implement bubble sort", () => {
    expect(bubbleSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort([5, 3, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort2([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(bubbleSort2([5, 3, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
