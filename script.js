
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


function calculateAverage() {
  var inputNumbers = document.getElementById("inputNumbers").value;
  var numbersArray = inputNumbers.split(",").map(Number);
  
  if (numbersArray.some(isNaN)) {
      document.getElementById("result").innerHTML = "Please enter valid numbers.";
  } else {
      var sum = 0;
      for (var i = 0; i < numbersArray.length; i++) {
          sum += numbersArray[i];
      }
      var average = sum / numbersArray.length;
      document.getElementById("result").innerHTML = "The average is " + average.toFixed(2);
  }
}



// 15.You are given a list of items. Write a program that randomly selects an item from the
// list and displays it on a web page.
// Given input:Apple, Banana, Orange, Grape, Mango
// Expected output:When you click submit button,it randomly selects an item from the list.


function selectRandomItem() {
  var items = ["Apple", "Banana", "Orange", "Grape", "Mango"];
  var randomIndex = Math.floor(Math.random() * items.length);
  var selectedItem = items[randomIndex];
  document.getElementById("result").innerHTML = "Randomly selected item: " + selectedItem;
}


// 16.You are given a string. Write a program that counts the number of vowels in the string
// and displays the result on a web page.
// Given input:Skill safari
// Expected Output:Number of vowels: 4


function countVowels() {
  var inputString = document.getElementById("inputString").value;
  var vowelCount 
  // Convert the input string to lowercase to make the comparison case-insensitive
  inputString = inputString.toLowerCas
    for (var i = 1; i < inputString.length; i++) {
        var currentChar = inputString.charAt(i);
        if (currentChar === 'a' || currentChar === 'e' || currentChar === 'i' || currentChar === 'o' || currentChar === 'u') {
            vowelCount++;
        }
    }

 document.getElementById("result").innerHTML = "Number of vowels: " + vowelCount;
}



// 17.You are given an array of numbers. Write a program that finds the median of the
// numbers and displays the result on a web page.
// Given input:2,5,7,1,45,8,7
// Expected Output:Median: 7




// 18.You are given two strings. Write a program that checks if the two strings are anagrams
// (i.e., the two strings have the same characters but in a different order) and displays the
// result on a web page.
// Given input:Skill safari
// Expected output:The strings are not anagrams.




// 19.You are given an array of numbers. Write a program that finds the largest and smallest
// odd numbers in the array and displays the results on a web page.
// Given input:2,4,5,7,2,3
// Expected output:Largest odd number: 7, Smallest odd number: 3



function findOddNumbers() {
  var inputNumbers = document.getElementById("inputNumbers").value;
  var numbersArray = inputNumbers.split(",").map(Number);

  if (numbersArray.some(isNaN)) {
      document.getElementById("result").innerHTML = "Please enter valid numbers.";
  } else {
    var oddNumbers = numbersArray.filter(function(num) {
      return num % 2 !== 0;
  });

  if (oddNumbers.length === 0) {
    document.getElementById("result").innerHTML = "No odd numbers found in the array.";
  } else {
      var largestOdd = Math.max(...oddNumbers);
      var smallestOdd = Math.min(...oddNumbers);
      document.getElementById("result").innerHTML = "Largest odd number: " + largestOdd + ", Smallest odd number: " + smallestOdd;
    }
  }
}



// 20.You are given a list of items. Write a program that removes all duplicates from the list
// and displays the result on a web page.
// Given input:apple, banana, cherry, apple, date, banana, elderberry
// Expexted Output:apple,banana,cherry,,date,elderberry



function removeDuplicates() {
  var inputItems = document.getElementById("inputItems").value;
  var itemsArray = inputItems.split(",");
  // Use a Set to remove duplicates and then convert it back to an array
  var uniqueItems = [...new Set(itemsArray)];

  // Join the unique items back into a string
  var resultString = uniqueItems.join(", ");
            
  document.getElementById("result").innerHTML = resultString;
}