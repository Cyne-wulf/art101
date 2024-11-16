// index.js - Logic file for lab 13
// Author: Ashan Devine
// Date: 11/16/24

// Constants

// Functions

function fizzBuzzBoom() 
{
  let oneLongString = "";

  for (let num = 0; num <= 200; num++) 
  {
    let str = "";
    
    if (num == 0) 
    {
      // str += "FizzBuzzBoomBang!";
    }
  

    if (num % 3 === 0) 
    {
      str += "Fizz";
    }

    if (num % 5 === 0) 
    {
      str += "Buzz";
    }

    if (num % 7 === 0) 
    {
      str += "Boom";
    }

    if (num % 9 === 0) 
    {
      str += "Bang";
    }

    if (str === "") 
    {
      oneLongString += num + "<br>";
    }
    else
    {
      oneLongString += num + " - " + str + "!<br>";
    }
  }

  $("#output").html(oneLongString);
}

// Call the function to execute it
fizzBuzzBoom();

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
}

// let's get this party started
main();
