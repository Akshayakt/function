
function Product(name, price) {
  this.name = name;
  this.price = price;

  if (price < 0) {
    throw RangeError('Cannot create product ' +
                      this.name + ' with a negative price');
  }
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.apply(this, [name, price]);
  this.category = 'toy';
}
function Clothes (name, price) {
  Product(name, price);
  this.category = 'clothes'
}

var cheese = new Food('pizza', 250);
var robo = new Toy('robot', 40);
var salwar = new Clothes('salwar', 1250);

var n=document.getElementById('name');
var p=document.getElementById('price');
var c=document.getElementById('category');


n.innerHTML = 'name:'+" "+cheese.name;
p.innerHTML = 'price:'+ " " +cheese.price;
c.innerHTML = 'category:'+" "+cheese.category;

console.log(cheese);
console.log(robo);
console.log(salwar);