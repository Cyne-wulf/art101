// index.js - purpose and description here
// Author: Ashan Devine
// Date: 11/25/24

// Constants
const API_URL = "https://api.chucknorris.io/jokes/random";

// Functions

// Fetch a Chuck Norris joke from the API and display it in the output div.
function fetchJoke() {
  console.log("Button clicked. Fetching joke...");

  // Ajax used to fetch api
  $.ajax({
      url: API_URL,        // URL
      type: "GET",         // Request type
      dataType: "json",    // Response type
      success: function (data) {
          console.log("API call successful:", data);

          // Display the joke in the output div
          $("#output").html(`<p>${data.value}</p>`);
      },
      error: function (jqXHR, textStatus, errorThrown) {
          console.log("API call failed:", textStatus, errorThrown); //Error Handling case

          // Display an error message
          $("#output").html("<p>Oops! Failed to fetch the joke. Try again later.</p>");
      }
  });
}


//Main function to set up event listeners.
function main() {
  console.log("Main function started.");

  // Set up the click event for the button
  $("#activate").click(function () {
      fetchJoke();
  });
}

// let's get this party started
main();
