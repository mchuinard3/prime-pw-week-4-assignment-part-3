console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(item) {
  for (let i = 0; i < item.length; i++)
  basket.push(item[i]);
  if (item.length > 0) {
    }
    return true;
}
console.log(`Basket is ${basket}`);
console.log('Adding milk and eggs (expect true)', addItem(['milk']));
console.log(`Basket is now ${basket}`);

function listItems() {
  for (let i = 0; i < basket.length; i++) {
  return basket[i];
  }
}
console.log(listItems());

function empty() {
  basket.length = 0;
  return basket;
}
console.log(empty());
