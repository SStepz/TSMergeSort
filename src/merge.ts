export function merge(c1: number[], c2: number[], c3: number[]): number[] {
  const result: number[] = [];

  // Reverse c2 from descending to ascending
  const c2_reversed: number[] = [];
  for (let i = c2.length - 1; i >= 0; i--) {
    c2_reversed.push(c2[i]);
  }

  // Merge all three ascending arrays
  let i = 0;
  let j = 0;
  let k = 0;

  while (i < c1.length || j < c2_reversed.length || k < c3.length) {
    const a = i < c1.length ? c1[i] : Infinity;
    const b = j < c2_reversed.length ? c2_reversed[j] : Infinity;
    const c = k < c3.length ? c3[k] : Infinity;

    if (a <= b && a <= c) {
      result.push(a);
      i++;
    } else if (b <= a && b <= c) {
      result.push(b);
      j++;
    } else {
      result.push(c);
      k++;
    }
  }

  return result;
}
