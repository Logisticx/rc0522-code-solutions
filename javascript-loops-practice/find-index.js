/* exported findIndex */
function findIndex(array, value) {
  var findIndexResult = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      findIndexResult = i;
      return findIndexResult;
    } else {
      findIndexResult = -1;
    }
  }
  return findIndexResult;
}
