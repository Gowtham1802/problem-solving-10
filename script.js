
// 11.You are given an array of numbers. Write a program that finds the largest even number
// in the array and displays the result on a web page.
// Given input:John,Alice,Bob,Zara,David
// Expected output:Alice


//array of numbers
const numbers = [10, 5, 16, 8, 3, 12, 17, 20, 28, 30, 33];

//largest even number in the array
function findLargestEvenNumber(arr) {
  let largestEven = null;

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) { 
        if (largestEven === null || arr[i] > largestEven) {
        largestEven = arr[i];
        }
      }
    }

    return largestEven;
  }
   const largestEvenNumber = findLargestEvenNumber(numbers);

  // Display the result on the web page
    if (largestEvenNumber !== null) {
      document.write(`The largest even number is: ${largestEvenNumber}`);
    } else {
      document.write("There are no even numbers in the array.");
  }



  