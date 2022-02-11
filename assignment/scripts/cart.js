console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];
function addItem(item) {
for (let i = 0; i < item.length; i++) {
  if (item.length > 0) {
    basket.push(item[i]);
  }
}
  return true;
}
console.log('Test - should say true:', addItem(['milk', 'eggs']));
console.log(basket);

function listItems() {
  
}
