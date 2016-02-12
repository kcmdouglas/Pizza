function Pizza(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

function Topping(toppingType) {
  this.toppingType = toppingType;
}

function Order(street, city, state, instructions) {
  this.street = street;
  this.city = city;
  this.state = state;
  this.instructions = instructions;
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

Order.prototype.fullAddress = function () {
  return this.street + ", " + this.city + ", " + this.state + "<br> <br> '" + this.instructions + "'";
}

function resetFields() {
  document.getElementById("add-pizza").reset();
  $("div.meat-choices").hide("slow");
  $("div.veggie-choices").hide("slow");
  $("div.etc-choices").hide("slow");
}

$(document).ready(function() {
  var newOrder = new Order("", "", "");
  $("div#pizza-order-and-display").show();

  $("button#meat").click(function () {
    $("div.meat-choices").slideToggle("slow");
  });

  $("button#veg").click(function () {
    $("div.veggie-choices").slideToggle("slow");
  });

  $("button#etc").click(function () {
    $("div.etc-choices").slideToggle("slow");
  });

  $("#ordered-pizza").click(function () {
    $(".topping").slideToggle("slow");
  });

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
    var totalCost = 0;
    var pizzaNumber = newOrder.pizzas.indexOf(newPizza);
    $("span#ordered-pizza").append("<h4>" + newPizza.pizzaSize + " Pizza</h4><span class='topping' id='topping" + pizzaNumber + "'></span>");
    newPizza.toppings.forEach(function (topping) {
        $("span#topping" + pizzaNumber).append("<li>" + topping + "</li>");
    });
    newOrder.pizzas.forEach(function (pizza) {
      totalCost += pizza.cost();
    });
    resetFields();
    $("span#total-cost h3").text("Total: $" + totalCost + "");
  });

  $("button#order-checkout").click(function () {
    $("span#order").slideToggle();
    $("div#pizza-order-and-display").hide();
  });

  $("form#order-form").submit(function (event){
    event.preventDefault();
    $("span#order").hide();
    newOrder.street = $("input.new-street").val();
    newOrder.city = $("input.new-city").val();
    newOrder.state = $("input.new-state").val();
    newOrder.instructions = $("textarea#instructions").val();
    $("div#completed-order").show();

    newOrder.pizzas.forEach(function (pizza) {
      var pizzaNumber = newOrder.pizzas.indexOf(pizza);
      $("span#completed-order-food").append("<h4>" + pizza.pizzaSize + " Pizza</h4><span id='final-topping" + pizzaNumber + "'></span>");
      pizza.toppings.forEach(function (topping) {
          $("span#final-topping" + pizzaNumber).append("<li>" + topping + "</li>");
        });
    });
    var totalCost = 0;
    newOrder.pizzas.forEach(function (pizza) {
      totalCost += pizza.cost();
    });
    $("span#completed-order-cost").append("<h4>Total: $" + totalCost + "</h4>" + "<h4>Delivery cost: $3.00</h4> <h4>Grand Total: $" + (totalCost + 3) + "</h4>");
    $("span#completed-order-address").append("<h4>" + newOrder.fullAddress() + "</h4>");
  });

  $("button#refresh").click(function () {
    location.reload();
  });
});
