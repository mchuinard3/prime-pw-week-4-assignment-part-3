console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(item) {
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
