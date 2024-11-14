const queryString = "name=John&age=30&city=NewYork";

const object = queryString.split("&").reduce((acc, curr) => {
  const [key, value] = curr.split("=");
  acc[key] = decodeURIComponent(value);

  return acc;
}, {});
console.log(object);
