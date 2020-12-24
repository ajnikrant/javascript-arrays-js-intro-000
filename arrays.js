var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray()
{
  var newArray = ["Kisses", ...chocolateBars];
  newArray;
}

function destructivelyAddElementToBeginningOfArray() {
  var addKisses = [chocolateBars.unshift("Kisses")];
  chocolateBars;
}
