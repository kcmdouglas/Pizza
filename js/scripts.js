function Pizza(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

function Topping(name) {
  this.name = name;
}

function Order(street, city, state) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.pizzas = [];
}

Pizza.prototype.cost = function () {
  var sizeCost = 0;
  var toppingCost = 0;

  if(this.pizzaSize === "Small"){
    sizeCost += 10;
  } else if(this.pizzaSize === "Medium") {
    sizeCost += 12;
  } else if(this.pizzaSize === "Large") {
    sizeCost += 14;
  } else if(this.pizzaSize === "Extra Large") {
    sizeCost += 16;
  }

  this.toppings.forEach(function(topping) {
    toppingCost += .50;
  });

  var totalCost = sizeCost + toppingCost;
  return totalCost;
};

$(document).ready(function() {
  $("form#add-pizza").submit(function (event){
    event.preventDefault();

    var inputtedSize = $("select#size").val();
    var newPizza = new Pizza(inputtedSize);
    $("input[name='toppings[]']:checked").each(function () {
      var toppingName = $(this).val();
      newPizza.toppings.push(toppingName);
    });

    var newOrder = new Order("", "", "");

    newOrder.pizzas.push(newPizza);

    $("div#no-order").hide();
    $("div#entire-order").show();
    var totalCost = 0;
    newOrder.pizzas.forEach(function(pizza) {
      $("div#entire-order").append("<ul><h4>" + pizza.pizzaSize + " Pizza</ul>");
      // totalCost += cost(pizza);
    });
  });
  // $("div#entire-order").append("<ul><h3>Total: $" + totalCost + "</ul>");
});
