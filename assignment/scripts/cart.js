console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
const maxItems = 5;
function addItem(item) {
  if (isFull(basket)) {
    return false;
  }
  basket.push(item);
  return true;
}

console.log(`Basket is ${basket}`);
console.log('Adding milk (expect true)', addItem('milk'));
console.log('Adding bananas', addItem('bananas'));
console.log('Adding blueberries', addItem('blueberries'));
console.log(`Basket is now ${basket}`);

function listItems(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    }
  }
  listItems(basket);

function empty(array) {
  array.length = 0;
  return array;
}
console.log('Basket is empty again (empty array):', empty(basket));

function isFull(array) {
  if (array.length < maxItems) {
    return false;
  }
  return true;
}
console.log('Does the basket contain 5 or more items:', isFull(basket));

console.log('Adding eggs', addItem('eggs'));
console.log('Adding bread', addItem('bread'));
console.log('Adding jelly', addItem('jelly'));

function removeItem(item) {
let index = basket.indexOf(item);
if (index === -1) {
  return null;
  }
return basket.splice(index, 1);

}
console.log(removeItem('bread')); //return bread
console.log(removeItem('grapes')); //return null
