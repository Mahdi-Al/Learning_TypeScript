function add(num: number, num2: number) {
  return num + num2;
}

function printOut(number: number) {
  console.log("The number is " + number);
}

printOut(add(2, 2));
let combineValues: (a: number, b: number) => number;
// let combineValues = add;
function addHandle(n1: number, n2: number, callBack: (num: number) => void) {
  const result = n1 + n2;
  callBack(result);
  return result;
}

addHandle(1, 4, (result) => {
  console.log(result);
});
