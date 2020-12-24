var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray(newArray, 0)
{
  var newArray = ["Kisses", ...chocolateBars];
  newArray;
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift("Kisses");
  chocolateBars;
}
