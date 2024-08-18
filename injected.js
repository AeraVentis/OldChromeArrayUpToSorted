if (!Array.prototype.toSorted) {  // if ToSorted method isn't exist, set next
  Array.prototype.toSorted = function(compareFn) {
    compareFn = compareFn || ((a, b) => String(a).localeCompare(b));
    const arrayCopy = [...this];
    return arrayCopy.sort(compareFn);
  };
  console.log('Polyfill for Array.prototype.toSorted applied');
}
