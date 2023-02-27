const xhr = new XMLHttpRequest();

// Define the request method and URL
const method = "POST";
const url = "https://example.com/api/users";

xhr.open(method, url, true);

// Set the request headers
xhr.setRequestHeader("Content-Type", "application/json");

// Define the request body
const body = JSON.stringify({
  username: "john.doe",
  password: "password123",
});

xhr.onload = function () {
  // Handle the response
  console.log(xhr.response);
};

xhr.onerror = function () {
  // Handle the error
  console.error("An error occurred while making the request.");
};

// Send the request with the request body
xhr.send(body);
