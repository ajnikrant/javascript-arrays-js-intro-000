var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray()
{
  var newArray = ["Kisses", ...chocolateBars];
  newArray;
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift("Kisses");
  chocolateBars;
}
