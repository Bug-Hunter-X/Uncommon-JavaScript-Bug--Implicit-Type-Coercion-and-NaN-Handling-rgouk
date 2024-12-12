function foo(a, b) {
  // Explicitly check for null and NaN values
  if (a === null || b === null || isNaN(a) || isNaN(b)) {
    return null; // Handle null or NaN values
  }

  // Type conversion for safer addition
  a = Number(a);
  b = Number(b);

  return a + b; // Ensure numeric addition
}

console.log(foo(10, '20')); // Correctly handles type conversion and addition
console.log(foo(null, 5)); // Correctly handles null values
console.log(foo(NaN, 5)); // Correctly handles NaN values
console.log(foo(10, NaN)); //Correctly handles NaN values