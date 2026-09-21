//
// This is only a SKELETON file for the 'Line Up' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const format = (name, number) => {
  switch (number % 10) {
    case 1:
      if (number % 100 === 11) {
        return (
          name +
          ", you are the " +
          number +
          "th customer we serve today. Thank you!"
        );
      }
      return (
        name +
        ", you are the " +
        number +
        "st customer we serve today. Thank you!"
      );
    case 2:
      if (number % 100 === 12) {
        return (
          name +
          ", you are the " +
          number +
          "th customer we serve today. Thank you!"
        );
      }
      return (
        name +
        ", you are the " +
        number +
        "nd customer we serve today. Thank you!"
      );
    case 3:
      if (number % 100 === 13) {
        return (
          name +
          ", you are the " +
          number +
          "th customer we serve today. Thank you!"
        );
      }
      return (
        name +
        ", you are the " +
        number +
        "rd customer we serve today. Thank you!"
      );
    default:
      return (
        name +
        ", you are the " +
        number +
        "th customer we serve today. Thank you!"
      );
  }
};
