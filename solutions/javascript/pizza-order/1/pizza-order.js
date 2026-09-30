/// <reference path="./global.d.ts" />
//
// @ts-check

/** @param {string} thing
 *
 * @return {number}
 */
function resolvePrice(thing) {
  switch (thing) {
    case "Margherita":
      return 7;
    case "Caprese":
      return 9;
    case "Formaggio":
      return 10;
    case "ExtraToppings":
      return 2;
    case "ExtraSauce":
      return 1;
  }
  return 0;
}

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  if (extras.length === 0) return resolvePrice(pizza);
  const [first, ...rest] = extras;
  return resolvePrice(first) + pizzaPrice(pizza, ...rest);
}

/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(pizzaOrders) {
  let res = 0;
  for (const order of pizzaOrders) {
    res += pizzaPrice(order.pizza, ...order.extras);
  }
  return res;
}
