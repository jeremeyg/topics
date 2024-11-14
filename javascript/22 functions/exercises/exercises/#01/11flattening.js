/*
Flattening and Organizing Tags
You are managing a blog platform where each blog post has tags. The tags need to be flattened and sorted alphabetically.

Exercise:

Given an array of blog posts, each with a tags property (an array of tags), create a function getSortedTags(posts) that returns a sorted array of unique tags.
Use Array.prototype.flat(), Array.prototype.filter(), and Array.prototype.sort() to implement this.
*/

const posts = [
  { title: "Post 1", tags: ["JavaScript", "Web Development"] },
  { title: "Post 2", tags: ["CSS", "Web Design"] },
  { title: "Post 3", tags: ["JavaScript", "CSS"] },
];

function getSortedTags(posts) {
  // Return a sorted array of unique tags
  return posts
    .map((post) => post.tag)
    .flat()
    .filter((tag, index, array) => array.indexOf(tag) === index)
    .sort();
}

// Example: getSortedTags(posts) should return ["CSS", "JavaScript", "Web Design", "Web Development"]
