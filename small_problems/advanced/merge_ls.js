function merge(array1, array2) {
  const copy1 = array1.slice();
  const copy2 = array2.slice();
  const result = [];

  while (copy1.length > 0 && copy2.length > 0) {
    result.push(copy1[0] <= copy2[0] ? copy1.shift() : copy2.shift());
  }

  return result.concat(copy1.length === 0 ? copy2 : copy1);
}

// Discussion

// The problem's requirements—especially the rule that mutation is not
// allowed—make the solution more complicated to a degree that depends on how
// they are handled.

// The provided solution handles the non-mutation rule by first creating a copy
// of each input array. Next, the solution uses a while loop to incrementally
// build the result array. During each iteration, the solution compares the
// first element from the first array copy with the first element from the
// second array copy, and removes the element with the lower value from its
// array copy. Since the two array copies are already sorted, comparing the
// first elements like this guarantees that the lowest value between both array
// copies is selected, removed, and pushed to the result array—ensuring that it
// is built in the properly sorted order. The loop repeats this process until
// one of the array copies is empty.

// After the loop finishes, the solution concatenates the remaining elements
// from the non-empty array copy to the result array, and returns the result of
// this concatenation: a new array containing all the elements from both input
// arrays in sorted order.