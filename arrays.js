var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray()
{
  var newArray = ["Kisses", ...chocolateBars];
  newArray;
}

function destructivelyAddElementToBeginningOfArray() {
  var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];
  chocolateBars.unshift("Kisses");
  chocolateBars;
}
