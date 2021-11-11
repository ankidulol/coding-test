const sleep = ms => {
  return new Promise(resolve => setTimeout(resolve, ms));
};

function randomNumber() {
  return Math.floor(Math.random() * 4);
}

function updateArray(array, newItem, atIndex) {
  return array.map((item, index) => (index === atIndex ? newItem : item));
}

export { sleep, randomNumber, updateArray };
