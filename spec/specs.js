describe('Pizza', function () {
  it("creates a pizza object with a given size", function (){
    var newPizza = new Pizza(1);
    expect(newPizza.pizzaSize).to.equal(1);
  });
  it("holds an array of toppings for each pizza", function (){
    var newPizza = new Pizza(1);
    var firstTopping = new Topping("Peppers");
    var secondTopping = new Topping("Onions");
    newPizza.toppings.push(firstTopping);
    newPizza.toppings.push(secondTopping);
    expect(newPizza.toppings[0].name).to.equal("Peppers");
    expect(newPizza.toppings[1].name).to.equal("Onions");
  });
});

describe('Topping', function () {
  it("creates a topping object with a name", function (){
    var newTopping = new Topping("Anchovies");
    expect(newTopping.name).to.equal("Anchovies");
  });
});

describe('Order', function () {
  it("creates an Order object instantiated with an address", function (){
    var newOrder = new Order("123 Main Street", "Anytown", "Anystate");
    expect(newOrder.street).to.equal("123 Main Street");
    expect(newOrder.city).to.equal("Anytown");
    expect(newOrder.state).to.equal("Anystate");
  });
  it("holds array of ordered pizzas", function (){
    var newOrder = new Order("123 Main Street", "Anytown", "Anystate");
    var firstPizza = new Pizza(2);
    var secondPizza = new Pizza(4);
    expect(newOrder.pizzas[0].pizzaSize).to.equal(1);
    expect(newOrder.pizzas[1].pizzaSize).to.equal(1);
  });
});
