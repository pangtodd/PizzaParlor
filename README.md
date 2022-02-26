# Pizza Parlor

#### By Todd Pangilinan

A website that allows customers to order custom pizzas.

## Technologies used:

* HTML
* CSS
* Bootstrap
* JavaScript
* JQuery
* markdown

## Description:
 Website that  allows a customer to order a pizza. The site takes user input and creates a pizza order (via objects), keeping track of their order.


## Setup/Installation Requirements

* If you don't have git installed on your machine, follow these [instructions.](https://www.learnhowtoprogram.com/introduction-to-programming/getting-started-with-intro-to-programming/git-and-github)
* Via your terminmal, navigate to the directory you want to store my files in.
* Clone my git hub directory by typing or cutting pasting: "git clone https://github.com/pangtodd/PizzaParlor.git" into your terminal
* open files in browswer or code editor of your choice.
* you can also view this website [here](https://github.com/pangtodd/PizzaParlor.git) or you can cut and paste this into your browser: https://pangtodd.github.io/PizzaParlor

## Tests:

#### Describe: Pizza()

- Test: 'create a contructor for "pizza" objects'
- Code: let testPizza =new Pizza("large", "pepperoni", 12);
- Expected Output: testPizza; {"large", "pepperoni, 12}
---

#### Describe: Order()
- Test: "create a contructor for 'order' objects"
- Code: let testOrder = new Order ();
- Expected Output: testOrder; {}
---

#### Describe: Order.prototype.addPizza()
- Test: "create a prototype for Order that adds pizzas to an order object"
- Code: testOrder.addPizza(testPizza);
- Expected Output: testOrder; {pizzas: {testPizza}}
---

#### Describe: Order.prototype.assignId()
- Test: "create a prototype for Order that increments current.id by 1 each time the function is called"
- Code: testOrder.assignId(testPizza);
- Expected Output: testOrder.currentId = 1

- Test: "Order.assignID that increments current.id by 1 each time the function is called"
- Code: testOrder.assignId(testPizza);
- Expected Output: testPizza.Id = 1
---

#### Describe: Pizza.prototype.pizzaPrice()
- Test: "create a prototype for Pizza that calculates the cost of a pizza and inserts it into the pizza object."
- Code: testOrder.assignId(testPizza);
- Expected Output: testPizza.cost = 25
---

#### Describe: Order.prototype.findPizza()
- Test: "create a prototype for Order that searches for a pizza by its id number"
- Code: testOrder.findPizza(1);
- Expected Output: Pizza {size: 'medium', topping: Array(3), price: 25, id: 1}
---

#### Describe: displayPizzaDetails()
- Test: "create a function that loops through an object and converts attributes to a string/html."
- Code: displayPizzaDetails(pizzaOrder);
- Expected Output: <li id="1">medium pizza with pepperoni, Canadian bacon, jalapeno. $25</li> (in index.html).
---


## Known Bugs

* As of 2/26/22, no known bugs.
* If you notice mistakes or bugs, please email pang.todd@gmail.com

## License

[MIT](https://opensource.org/licenses/MIT)
Copyright (c) Todd Pangilinan 