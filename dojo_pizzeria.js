// var pizza = {
//     crustType:  "deep dish",
//     sauceType:  "traditional",
//     cheeses:    ["mozzarella"],
//     toppings:   ["pepperoni", "sausage"],
//     "pizzaOven": function() {
//         console.log("crust type:    " + this.crustType);
//         console.log("sauce type:    " + this.sauceType);
//         console.log("cheese type:   " + this.cheeses);
//         console.log("toppings:      " + this.toppings);
//     }
// }

// pizza.pizzaOven();

function pizzaOven (crustType, sauceType, cheese, toppings) {

    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese    = cheese;
    pizza.toppings  = toppings;
    return pizza;
}

var pizza1 = pizzaOven ("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"])

var pizza2 = pizzaOven ("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"])

var pizza3 = pizzaOven ("thin crust", "marinara", ["mozzarella", "provolone", "parmesan"], "")

var pizza4 = pizzaOven ("hand tossed", "marinara", ["mozzarella"], ["sausage", "mushrooms", "pepperoni", "green peppers", "onions", "olives"])

function randomPizza() {
    var PizzaRandom = Math.ceil(Math.random() * 4);
    return PizzaRandom;
}

var PizzaRandom = randomPizza();

if (PizzaRandom == 1) {
    console.log("Two Topping Deep Dish Pizza");
    console.log(pizza1);
};

if (PizzaRandom == 2) {
    console.log("Veggie Lover Pizza");
    console.log(pizza2)
};

if (PizzaRandom == 3) {
    console.log("Aint Easy Being Cheesy");
    console.log(pizza3);
};

if (PizzaRandom == 4) {
    console.log("The Works");
    console.log(pizza4);
};