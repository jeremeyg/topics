const sentence = "the quick brown fox jumps over the lazy dog";

const wordCount = sentence.split(" ").reduce((acc, word) => {
    acc[word] = (acc[word] || 0) + 1;
    return acc;
}, {});

console.log(wordCount);
/*
Output:
{
  the: 2,
  quick: 1,
  brown: 1,
  fox: 1,
  jumps: 1,
  over: 1,
  lazy: 1,
  dog: 1
}
*/
