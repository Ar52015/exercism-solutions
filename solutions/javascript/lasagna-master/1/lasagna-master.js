/// <reference path="./global.d.ts" />

import { NetworkResources } from "node:inspector";

// @ts-check

/**
 * Implement the functions needed to solve the exercise here.
 * Do not forget to export them so they are available for the
 * tests. Here an example of the syntax as reminder:
 *
 * @param {number} remainingTime
 *
 */
export function cookingStatus(remainingTime) {
  switch (remainingTime) {
    case 0:
      return "Lasagna is done.";
    case undefined:
      return "You forgot to set the timer.";
    default:
      return "Not done, please wait.";
  }
}

/**
 * preparationTime
 * @param {string[]} layers
 * @param {number} avgTime
 */
export function preparationTime(layers, avgTime) {
  return (layers.length ?? 0) * (avgTime ?? 2);
}

/**
 * quantities
 * @param {string[]} layers
 */
export function quantities(layers) {
  let needed = { noodles: 0, sauce: 0 };
  for (let layer in layers) {
    if (layers[layer] === "noodles") needed.noodles += 50;
    if (layers[layer] === "sauce") needed.sauce += 0.2;
  }
  return needed;
}

/**
 * addSecretIngredient
 * @param {string[]} friendsList
 * @param {string[]} myList
 */
export function addSecretIngredient(friendsList, myList) {
  myList.push(friendsList.slice(-1)[0]);
}

/**
 * scaleRecipe
 * @param {Record<string, number>} recipe
 * @param number portions
 */
export function scaleRecipe(recipe, portions) {
  if (!portions && portions !== 0) return recipe;
  let newRecipe = {};
  for (let i in recipe) {
    newRecipe[i] = recipe[i] * (portions / 2);
  }
  return newRecipe;
}
