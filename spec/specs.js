describe('Pizza', function () {
  it("creates a pizza object with a given size", function (){
    var newPizza = new Pizza(1);
    expect(newPizza.pizzaSize).to.equal(0);
  })
})
