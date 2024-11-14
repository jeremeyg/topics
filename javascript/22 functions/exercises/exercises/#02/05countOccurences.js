const posts = [
  { id: 1, tags: ["javascript", "webdev"] },
  { id: 2, tags: ["javascript", "react"] },
  { id: 3, tags: ["webdev", "css"] },
];
/*{
  javascript: 2,
  webdev: 2,
  react: 1,
  css: 1
}
 */

const postOcurrences = posts.reduce((acc, curr) => {
  curr.tags.forEach((tag) => {
    if (acc[tag]) {
      acc[tag] += 1;
    } else {
      acc[tag] = 1;
    }
  });
  return acc;
}, {});

console.log(postOcurrences);
