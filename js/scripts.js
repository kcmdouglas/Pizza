function Pizza(pizzaSize) {
  this.pizzaSize = pizzaSize;
  this.toppings = [];
}

function Topping(name) {
  this.name = name;
}

function Order(address) {
  this.address = address;
  this.pizzas = [];
}

$(document).ready(function() {
  $("form#add-pizza").submit(function (event){
    event.preventDefault();

    var inputtedSize = parseInt($("select#size").val());
    var newPizza = new Pizza(inputtedSize);
    $("input[name='toppings[]']:checked").each(function () {
      var toppingName = $(this).val();
      newPizza.toppings.push(toppingName);
    });



    $("div#entire-order").append("<li><span class='ordered-pizza'>" + newContact.fullName() + "</span></li>");

  });
});
