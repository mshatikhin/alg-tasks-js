const mergeSort = array => {
  if (array.length < 2) return array;

  const middle = Math.floor(array.length / 2);
  const left = array.slice(0, middle),
    right = array.slice(middle, array.length);

  return merge(mergeSort(left), mergeSort(right));
};

const merge = (left, right) => {
  const result = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) result.push(left.shift());
    else result.push(right.shift());
  }

  while (left.length) result.push(left.shift());
  while (right.length) result.push(right.shift());

  return result;
};

function mergeSort2(array) {
  if (array.length === 1) return array;

  const center = Math.floor(array.length / 2);
  const left = array.slice(0, center);
  const right = array.slice(center);

  return merge2(mergeSort2(left), mergeSort2(right));
}

function merge2(left, right) {
  const results = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) results.push(left.shift());
    else results.push(right.shift());
  }

  return [...results, ...left, ...right];
}

describe("Merge Sort", () => {
  it("Should implement merge sort", () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort([5, 3, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort2([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    expect(mergeSort2([5, 3, 1, 2, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});
