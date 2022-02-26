# Pizza Parlor

#### By Todd Pangilinan

A website that allows customers to order a custom pizza.

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

#### Describe: order.addPizza()
- Test: "create a prototype for Order that adds pizzas to an order object"
- Code: testOrder.addPizza(testPizza);
- Expected Output: testOrder; {pizzas: {testPizza}}
---

#### Describe: order.assignId()
- Test: "create a prototype for Order that adds a unique ID (incrementing by 1 each time the function is called) to each pizza object added to the Order object"
- Code: testOrder.assignId(testPizza);
- Expected Output: testPizza.Id = 1
---

#### Describe: pizza.pizzaPrice()
- Test: "create a prototype for Pizza that calculates the cost of a pizza and inserts it into the pizza object."
- Code: testOrder.assignId(testPizza);
- Expected Output: testPizza.cost = 27 
---

#### Describe: Order.findPizza()
- Test: "create a prototype for Order that searches for a pizza by its id number"
- Code: pizzaOrder.findPizza(1);
- Expected Output: Pizza {size: 'large', topping: Array(3), price: 29, id: 1}
---


Order.prototype.findPizza


## Known Bugs

* As of 2/16/22, no known bugs.
* If you notice mistakes or bugs, please email pang.todd@gmail.com

## License

[MIT](https://opensource.org/licenses/MIT)
Copyright (c) Todd Pangilinan 