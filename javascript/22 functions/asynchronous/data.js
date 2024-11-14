function simulateAsync(callback) {
  setTimeout(() => {
    callback(`Operationcompleted`);
  }, 200);
}

simulateAsync((message) => {
  console.log(message);
});
