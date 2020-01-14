
/** map-like */
function mapToNegativize(sourceArray) {
  let newArray = [];
  sourceArray.forEach(element => {
    newArray.push(element * -1);
  });
  return newArray;
}

function mapToNoChange(sourceArray) {
  let newArray = [];
  sourceArray.forEach(element => newArray.push(element));
  return newArray;
}

function mapToDouble(sourceArray) {
  let newArray = [];
  sourceArray.forEach(element => {
    newArray.push(element * 2);
  });
  return newArray;
}

function mapToSquare(sourceArray) {
  let newArray = [];
  sourceArray.forEach(element => {
    newArray.push(Math.pow(element, 2));
  });
  return newArray;
}

/** reduce-like */
function reduceToTotal(sourceArray, startingPoint) {
  // default to 'zero' if no starting value given.
  let total = startingPoint || 0;
  sourceArray.forEach(num => total += num);
  return total;
}

function reduceToAllTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (!sourceArray[i]) { return false; }
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i]) { return true; }
  }
  return false;
}



