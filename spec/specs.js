describe('Pizza', function () {
  it("creates a pizza object with a given size", function (){
    var newPizza = new Pizza(1);
    expect(newPizza.pizzaSize).to.equal(1);
  });
});

describe('Topping', function () {
  it("creates a topping object with a name", function (){
    var newTopping = new Topping("Anchovies");
    expect(newTopping.name).to.equal("Anchovies");
  });
});
