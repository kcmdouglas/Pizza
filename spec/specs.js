describe('Pizza', function () {
  it("creates a pizza object with a given size", function (){
    var newPizza = new Pizza("Small");
    expect(newPizza.pizzaSize).to.equal("Small");
  });
  it("holds an array of toppings for each pizza", function (){
    var newPizza = new Pizza("Small");
    var firstTopping = new Topping("Peppers");
    var secondTopping = new Topping("Onions");
    newPizza.toppings.push(firstTopping);
    newPizza.toppings.push(secondTopping);
    expect(newPizza.toppings[0].toppingType).to.equal("Peppers");
    expect(newPizza.toppings[1].toppingType).to.equal("Onions");
  });
  it("cost method uses algorithm to give total cost of a pizza", function (){
    var newPizza = new Pizza("Small");
    var firstTopping = new Topping("Peppers");
    var secondTopping = new Topping("Onions");
    newPizza.toppings.push(firstTopping);
    newPizza.toppings.push(secondTopping);
    expect(newPizza.cost()).to.equal(11);
  });
});

describe('Topping', function () {
  it("creates a topping object with a name", function (){
    var newTopping = new Topping("Anchovies");
    expect(newTopping.toppingType).to.equal("Anchovies");
  });
});

describe('Order', function () {
  it("creates an Order object instantiated with an address", function (){
    var newOrder = new Order("123 Main Street", "Anytown", "Anystate", "Beware of Dog");
    expect(newOrder.street).to.equal("123 Main Street");
    expect(newOrder.city).to.equal("Anytown");
    expect(newOrder.state).to.equal("Anystate");
    expect(newOrder.instructions).to.equal("Beware of Dog");
  });
  it("holds array of ordered pizzas", function (){
    var newOrder = new Order("123 Main Street", "Anytown", "Anystate", "Instructions");
    var firstPizza = new Pizza("Medium");
    var secondPizza = new Pizza("Extra Large");
    newOrder.pizzas.push(firstPizza);
    newOrder.pizzas.push(secondPizza);
    expect(newOrder.pizzas[0].pizzaSize).to.equal("Medium");
    expect(newOrder.pizzas[1].pizzaSize).to.equal("Extra Large");
  });
});
