'strict mode';
//business logic of for orders:
function Order() {
  this.pizzas = {};
  this.currentId= 0
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};





// business logic for pizzas:
function Pizza(size, topping, price) {
  this.size = size;
  this.topping = topping;
  this.price = price;
}

