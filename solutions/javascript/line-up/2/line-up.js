//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const PREFIX = ", you are the ";
const SUFFIX = " customer we serve today. Thank you!";

const getNumSuffix = (number) => {
  if ([11, 12, 13].includes(number % 100)) return "th";
  else if (number % 10 === 1) return "st";
  else if (number % 10 === 2) return "nd";
  else if (number % 10 === 3) return "rd";
  return "th";
};

export const format = (name, number) => {
  return name + PREFIX + String(number) + getNumSuffix(number) + SUFFIX;
};
