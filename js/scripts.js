'strict mode';
//business logic of for orders:
function Order() {
  this.pizzas = {};
  this.currentId= 0;
}

Order.prototype.addPizza = function(pizza) {
  pizza.id = this.assignId();
  this.pizzas[pizza.id] = pizza;
};

Order.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Order.prototype.findPizza = function(id) {
  if (this.pizzas[id] != undefined) {
    return this.pizzas[id];
  }
  return false;
};

// business logic for pizzas:
function Pizza(size, topping, price) {
  this.size = size;
  this.topping = topping;
  this.price = price;
};

Pizza.prototype.pricePizza = function(){
  let basePrice = 0;
  if (this.size ==="small"){
    basePrice = 12
  } else if (this.size==="medium"){
    basePrice=16
  } else {
    basePrice=20
  }
  let toppingsPrice = this.topping.length * 3;
  let totalPrice= basePrice+toppingsPrice;
  console.log ("total price: "+totalPrice)
  this.price=totalPrice;
};

function displayPizzaDetails(orderToDisplay) {
  let pizzasInOrder = $("ul#pizzaList");
  let htmlForPizzalist = "";
  Object.keys(orderToDisplay.pizzas).forEach(function(key) {
    const pizza = orderToDisplay.findPizza(key);
    htmlForPizzalist += "<li id=" + pizza.id + ">" + pizza.size + " pizza with cheese, " + pizza.topping.join(", ") + " $"+ pizza.price +"</li>";
  });
  pizzasInOrder.html(htmlForPizzalist);
};

// User Interface Logic ---------
let pizzaOrder = new Order();

$(document).ready(function() {
  $("form#pizzaInfo").submit(function(event) {
    event.preventDefault();
    $("#pizzaInfo").hide();
    $("#bridge").show();
    let pizzaToppings = [];
    const pizzaSize = $("#size").val();
    $("input:checkbox[name=toppings]:checked").each(function(){
      const toppingsChoice = $(this).val();
      pizzaToppings.push(toppingsChoice);
    });
    let newPizza = new Pizza(pizzaSize, pizzaToppings);
    newPizza.pricePizza();
    pizzaOrder.addPizza(newPizza);
    displayPizzaDetails(pizzaOrder);
  });

  $("button#morePizza").click(function() {
    document.getElementById("pizzaInfo").reset();
    $("#pizzaInfo").show();
    $("#bridge").hide();
    $("#confirmation").hide();
  });

  $("button#review").click(function() {
    document.getElementById("pizzaInfo").reset();
    $("#pizzaInfo").hide();
    $("#bridge").hide();
    $("#confirmation").show();
  });


});

