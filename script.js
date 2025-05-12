var isDate = function (input) {
  if (input instanceof Date) {
    return !isNaN(input.valueOf());
  }
  // Otherwise, try to parse it
  return !isNaN(Date.parse(input));
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
