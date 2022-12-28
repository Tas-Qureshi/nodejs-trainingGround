// function getAge(birthYear, currentYear)
// {
//     return currentYear - birthYear;
// }
//module.exports.getAge = getAge;

// Get the Age
export const getAge = (birthYear, currentYear) => currentYear - birthYear;

// Get Age for Person
export const getAgeForPerson = (person, currentYear) => {
  return currentYear - person.birthYear;
};
// Divide Two Numbers
export const divide = (number1, number2) => {
  if (number2 === 0) {
    throw new Error(
      "Please... No division by zero... I cannot cope with that. /Your computer"
    );
  }
  return number1 / number2;
};

// Get Age Group
export const getAgeGroup = (age) => {
  if (age < 4) return "toddler";
  if (age < 13) return "kid";
  if (age < 20) return "teenager";
  if (age < 39) return "adult";
  if (age === 50) return "prime";

  return "old";
};

// Function Calling Function
export const addWithLog = (number1,number2, logger) => {
    logger(`About to '${number1} + ${number2}'`);
    return number1 + number2;
};