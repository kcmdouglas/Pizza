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
    expect(newPizza.toppings[0].name).to.equal("Onions");
    expect(newPizza.toppings[1].name).to.equal("Pepperoni");
  });
});

describe('Topping', function () {
  it("creates a topping object with a name", function (){
    var newTopping = new Topping("Anchovies");
    expect(newTopping.name).to.equal("Anchovies");
  });
});

describe('Order', function () {
  it("", function (){
  });
});
