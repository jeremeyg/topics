const contents = [
  { title: "Introduction", content: "Welcome to our site!" },
  { title: "Services", content: "We offer web development services." },
];

function generateSections(contents) {
  // Generate HTML for each section and join them into a single string
  return contents
    .map(
      ({ title, content }) =>
        `<section>
        <h2>${title}</h2>
        <p>${content}</p>
      </section>`
    )
    .join("");
}

const html = generateSections(contents);
console.log(html);
// Output:
// <section><h2>Introduction</h2><p>Welcome to our site!</p></section>
// <section><h2>Services</h2><p>We offer web development services.</p></section>
