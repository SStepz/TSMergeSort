import { merge } from "../src/merge";

describe("merge()", () => {
  test("should merge three sorted arrays correctly", () => {
    const col1 = [1, 4, 7];
    const col2 = [9, 5, 2];
    const col3 = [6, 8, 10];
    const result = merge(col1, col2, col3);
    expect(result).toEqual([1, 2, 4, 5, 6, 7, 8, 9, 10]);
  });

  test("should work with empty arrays", () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1, 2], [], [])).toEqual([1, 2]);
    expect(merge([], [3, 2], [])).toEqual([2, 3]);
  });

  test("should handle duplicates", () => {
    const result = merge([1, 2], [3, 2], [1, 4]);
    expect(result).toEqual([1, 1, 2, 2, 3, 4]);
  });
});
