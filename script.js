
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




// 12.You are given two numbers. Write a program that finds the sum, difference, product,
// and quotient of the two numbers and displays the results on a web page.
// Given input:2,4.
// Expected output:Sum: 6, Difference: -2, Product: 8, Quotient: 0.5


  // Define the two numbers
    const number1 = 5;
    const number2 = 7;

  // Calculate the results
    const sum = number1 + number2;
    const difference = number1 - number2;
    const product = number1 * number2;
    const quotient = number1 / number2
  // Display the results on the web page
    document.write(`<br> Sum: ${sum},<br>`);
    document.write(`Difference: ${difference},<br>`);
    document.write(`Product: ${product},<br>`);
    document.write(`Quotient: ${quotient}, <br>`);



// 13.You are given a string. Write a program that checks if the string is a palindrome (i.e.,
// the string reads the same backward as forward) and displays the result on a web page.
// Given input:ABCDCBA.
// Expected output:The string is a palindrome.

 
// Define the input string
  const inputString = "RACECAR";

    // Function to check if a string is a palindrome
    function isPalindrome(str) {
        const reversedStr = str.split('').reverse().join('');
        return str === reversedStr;
    }

    // Check if the input string is a palindrome
    const result = isPalindrome(inputString)
    // Display the result on the web page
    if (result) {
        document.write("The string is a palindrome.");
    } else {
        document.write("The string is not a palindrome.");
    }



// 14.You are given an array of numbers. Write a program that finds the average of the
// numbers and displays the result on a web page.
// Given input:2,3,4,5
// Expected output:The average is 3.5.


