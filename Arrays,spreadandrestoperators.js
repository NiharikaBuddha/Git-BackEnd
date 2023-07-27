const originalArray = ['apple', 'oranges', ' ', 'mango', ' ', 'lemon'];
const transformedArray = originalArray.map(item => {
  if (item.trim() === '') {
    return 'empty string';
  } else {
    return item;
  }
});
