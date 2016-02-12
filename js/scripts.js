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
    newOrder.pizzas.forEach(function(pizza) {
      $("div#entire-order").append("<ul><h4>" + pizza.pizzaSize + " Pizza</ul>");
    });
    
  });
});
