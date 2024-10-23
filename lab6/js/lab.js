// index.js - This is the logic file for the lab6 assignment
// Author: Ashan Devine
// Date: 10/22/24

// Declarations:

let myTransport=["EBike", "Car", "Rides from my roommate", "Rides from my friends", "My Legs"];

let myMainRide = {
  make: "Honda",
  model:"Accord",
  color: "Silver",
  year: "2017",
  age: function() {
      return 2024 - this.year;
      }
  };

// Functions
function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  document.writeln("For getting around, I use: " + myTransport + "<br>");
  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");
}

// let's get this party started
main();
