/* exported filterOutStrings */
function filterOutStrings(values) {
  var filterOutStringsResult = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] === typeof 0) {
      filterOutStringsResult.push(values[i]);
    }
  }
  return filterOutStringsResult;
}
