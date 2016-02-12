function Pizza(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

function Topping(toppingType) {
  this.toppingType = toppingType;
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
  var newOrder = new Order("", "", "");
  $("form#add-pizza").submit(function (event){
    event.preventDefault();

    var inputtedSize = $("select#size").val();
    var inputtedToppings = [];
    var newPizza = new Pizza(inputtedSize);
    $.each($("input[name='toppings[]']:checked"), function() {
      inputtedToppings.push($(this).val());
    });

    inputtedToppings.forEach(function(topping) {
      newPizza.toppings.push(topping);
    });


    newOrder.pizzas.push(newPizza);
    $("div#no-order").hide();
    $("div#entire-order").show();
    var pizzaNumber = newOrder.pizzas.indexOf(newPizza);
    $("span#ordered-pizza").append("<h4>" + newPizza.pizzaSize + " Pizza</h4><span id=toppings" + pizzaNumber + "></span>");
    newPizza.toppings.forEach(function (topping) {
        $("span#toppings" + pizzaNumber).append("<li>" + topping + "</li>");
    });
  });


  $("div#entire-order").append("<ul><h3>Total: $" + totalCost + "</ul>");
});
