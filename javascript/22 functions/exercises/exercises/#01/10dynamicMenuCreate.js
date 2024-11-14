/*Dynamic Menu Creation
You are working on a navigation bar that dynamically creates menu items based on an object that holds the route and label for each menu item.

Exercise:

Create a menu object that contains the label and route for each menu item.
Write a function generateMenu(menu) that creates an HTML string for the navigation bar based on the menu object.
Use Object.entries() to iterate through the object. */

const menu = {
  home: { label: "Home", route: "/" },
  about: { label: "About Us", route: "/about" },
  services: { label: "Services", route: "/services" },
  contact: { label: "Contact", route: "/contact" },
};

function generateMenu(menu) {
  return `
    <nav>
      ${Object.entries(menu)
        .map(([key, { label, route }]) => `<a href="${route}">${label}</a>`)
        .join("")}
    </nav>
  `;
}

const menuHtml = generateMenu(menu);
console.log(menuHtml);

// Result: <nav><a href="/">Home</a><a href="/about">About Us</a>...</nav>
