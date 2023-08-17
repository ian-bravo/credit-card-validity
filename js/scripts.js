
let multiDigitNumber = "1234567890123456";

function luhnsAlgorithm(number) {
  let splitArr = number.split("");
  const everyOtherDigitArray = [];

  for (let i = splitArr.length-1; i >= 0; i -= 2) {
    everyOtherDigitArray.push(splitArr[i]);
  }
  console.log(everyOtherDigitArray);
}

 


// for (let i = splitArr.length-1; i >= 0; i -= 2) {
//   everyOtherDigitArray.push(i);
// }