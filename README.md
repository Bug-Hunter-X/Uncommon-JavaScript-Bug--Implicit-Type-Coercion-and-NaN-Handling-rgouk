# Uncommon JavaScript Bug: Implicit Type Coercion and NaN Handling

This repository demonstrates a subtle bug in JavaScript related to implicit type coercion and the handling of NaN (Not a Number). The bug occurs due to loose typing and lack of explicit type checking.

## Bug Description

The `foo` function attempts to add two numbers. However, it does not perform any type checking.  This leads to unexpected results when one or both inputs are null or NaN.  Javascript's implicit type coercion will convert `10` and `'20'` to strings and perform string concatenation instead of numeric addition.  Similarly, adding `NaN` to any number will always result in `NaN`.

## How to Reproduce

1. Clone this repository.
2. Navigate to the repository's root directory.
3. Run the `bug.js` file using a JavaScript interpreter (Node.js, for example).
4. Observe the unexpected output.

## Solution

The solution involves adding explicit type checking to handle null values and NaN appropriately. The `bugSolution.js` file provides a corrected implementation.

## Lessons Learned

This example highlights the importance of robust input validation and explicit type handling in JavaScript to avoid unexpected behavior caused by implicit type coercion and the peculiarities of NaN.