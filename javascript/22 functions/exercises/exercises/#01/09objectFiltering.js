/*
Object Filtering for API Responses
When building a website, you often need to work with large data sets from APIs. You might need to filter out unnecessary data before displaying it on the site.

Exercise:

Create a function filterData(data, allowedKeys) that filters out any keys in an object that are not in the allowedKeys array.
Use Object.keys() and Object.entries() to filter the object.

*/
const userData = {
  id: 123,
  username: "jane_doe",
  email: "jane@example.com",
  password: "abcdef",
  role: "admin",
};

const allowedKeys = ["username", "email"];

function filterData(data, allowedKeys) {
  // Filter out keys that are not in allowedKeys
  Object.entries(
    Object.keys(data).filter(([keys]) => allowedKeys.includes(key))
  );
}

// Result should be: { username: "jane_doe", email: "jane@example.com" }
