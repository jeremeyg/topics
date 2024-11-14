/*
Object Manipulation for Website Configuration
You are building a website where you need to dynamically adjust the configuration settings (like theme, language, and layout) based on user preferences.

Exercise:

Create an object config that holds default settings: theme: "light", language: "en", and layout: "grid".
Create a function updateConfig(newSettings) that updates the config object with the new settings passed as an argument.
Use Object.assign() to merge new settings with the existing ones.
*/

const config = {
  theme: "light",
  language: "en",
  layout: "grid",
};

//object assign merges the config and newSettings,
function updateConfig(newSettings) {
  Object.assign(config, newSettings);
}

updateConfig({ theme: "dark", layout: "list" });
console.log(config);

// Example: updateConfig({ theme: "dark", layout: "list" });
// Result: { theme: "dark", language: "en", layout: "list" }
