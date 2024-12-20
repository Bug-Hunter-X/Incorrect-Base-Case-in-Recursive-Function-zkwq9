function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This is incorrect, should return 1
  }
  return a * b;
}