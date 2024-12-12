function foo(a, b) {
  if (a === null || b === null) {
    return null; // Handle null values
  }
  return a + b; // Potential error if a or b is NaN
}

console.log(foo(10, '20')); // Implicit type coercion to string concatenation
console.log(foo(null, 5)); // Correctly handles null values
console.log(foo(NaN, 5)); // Returns NaN, which might be unexpected