/*

Form Data Conversion
You are working on a web form and need to collect form data as an object to send to a server.

Exercise:

Given an array of form field values, convert them into an object where each key represents the form field name and each value represents the user input.
Use Object.fromEntries() to achieve this.

converts list to a value-key pair
*/

const formData = [
  ["username", "john_doe"],
  ["email", "john@example.com"],
  ["password", "123456"],
];

const formObjects = Object.fromEntries(formData);
console.log(formObjects);
// Convert formData array to an object
// Result should be: { username: "john_doe", email: "john@example.com", password: "123456" }
