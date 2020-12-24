var chocolateBars = ["snickers", "hundredgrand", "kitkat", "skittles"];

function addElementToBeginningOfArray()
{
  newArray = ["Kisses", ...chocolateBars];
  newArray;
}

function destructivelyAddElementToBeginningOfArray() {
  chocolateBars.unshift("Kisses");
  chocolateBars;
}
