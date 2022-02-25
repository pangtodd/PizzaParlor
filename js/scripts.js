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

Pizza.prototype.pricePizza = function(){
  let basePrice = parseInt(this.size);
  let toppingsPrice = this.topping.length * 2.50;
  console.log ("topping price: "+toppingsPrice);
  let price= basePrice+toppingsPrice;
  
}


// User Interface Logic ---------
let pizzaOrder = new Order();

$(document).ready(function() {
  $("form#pizzaInfo").submit(function(event) {
    event.preventDefault();
    let pizzaToppings = [];
    const pizzaSize = $("#size").val();
    console.log(pizzaSize);
    $("input:checkbox[name=toppings]:checked").each(function(){
      const toppingsChoice = $(this).val();
      pizzaToppings.push(toppingsChoice);
    });
    console.log(pizzaToppings);
    let newPizza = new Pizza(pizzaSize, pizzaToppings);
    newPizza.pricePizza();
    pizzaOrder.addPizza(newPizza);
    console.log(pizzaOrder.pizzas);
  });
});

