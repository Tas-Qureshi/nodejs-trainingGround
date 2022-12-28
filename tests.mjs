// const assert = require('assert');
// const app = require('./index.js');

import assert from "assert";
import {
  getAge,
  getAgeGroup,
  getAgeForPerson,
  divide,
  addWithLog,
} from "./index.mjs";

describe("age calculator", () => {
  it("someone born 1972 is 50 2022", () => {
    // act
    //const result = app.getAge(1972, 2022);
    const result = getAge(1972, 2022);
    // assert
    assert.equal(result, 50);
  });

  it("someone born 2021 is 1 2022", () => {
    //act
    //const result = app.getAge(2022 , 2023);
    const result = getAge(2022, 2023);
    //assert
    assert.equal(result, 1);
  });
  it("someone born 1991 is 1 2022", () => {
    //act
    //const result = app.getAge(1991 , 2022);
    const result = getAge(1991, 2022);
    //assert
    assert.equal(result, 31);
  });
});
//------------------------------------------------------------------------------------
//Age Groups Based on their AGE -tests
describe("age classifier", () => {
  it("0-3 years old should be a toddler", () => {
    // arrange
    // act
    const result = getAgeGroup(0);

    // assert
    assert.equal(result, "toddler");
  });
  it("4-12 years old should be a kid", () => {
    //act
    const result = getAgeGroup(4);

    //assert
    assert.equal(result, "kid");
  });
  it("13-19 years old should be a teenager", () => {
    //act
    const result = getAgeGroup(13);

    //assert
    assert.equal(result, "teenager");
  });
  it("20-39 years old should be a adult", () => {
    // arrange
    // act
    const result = getAgeGroup(38);

    // assert
    assert.equal(result, "adult");
  });
  it("above 39 years old ... you are just old", () => {
    // arrange
    // act
    const result = getAgeGroup(40);

    // assert
    assert.equal(result, "old");
  });
  it("But 50 - that is prime age, my friend. PRIME. AGE.", () => {
    // arrange
    // act
    const result = getAgeGroup(50);

    // assert
    assert.equal(result, "prime");
  });
});
//------------------------------------------------------------------------------------
// Constant, Let, Undefined and Null
it.skip("you cannot change a const variable", () => {
  const aNumber = 1;
  aNumber = 2;
});
it("you can change a let variable", () => {
  // arrange
  let aNumber = 1;

  // act
  aNumber = 2;

  // assert
  assert.equal(aNumber, 2);
});
it("uninitialized variables are undefined", () => {
  // act
  let aNumber;

  // assert
  assert.equal("undefined", typeof aNumber);
  assert.equal(undefined, aNumber);
});
it("null should be used for not set", () => {
  // arrange
  // declaring a dummy function
  const peekIntoTheBox = () => {
    return false;
  };

  // act
  let isCatAlive = null;

  // assert
  assert.equal(null, isCatAlive);
  isCatAlive = peekIntoTheBox();
});

//------------------------------------------------------------------------------------
//Arrays and loops to keep lists

describe("loops does things over and over", () => {
  it("array keep value", () => {
    //arange
    const array1 = [1, 2, 3, 4];
    const array2 = ["Tas", "Adam", "Dani"];
    const array3 = ["Tas", 31, true];
  });

  it("getting elements out of arrays", () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid"];

    // act
    const firstElement = names[0];
    const secondElement = names[1];

    const length = names.length;
    const lastElement = names[names.length - 1];

    // assert
    assert.equal(firstElement, "Marcus");
    assert.equal(secondElement, "Eliza");
    assert.equal(lastElement, "Obaid");
    assert.equal(length, 3);
  });

  //Loops

  it("while-loops just keeps going unless we stop them", () => {
    // arrange
    let counter = 0;

    // act
    while (counter < 2) {
      console.log(`Counter is now '${counter}'`);

      counter = counter + 1;
    }
  });

  it("loop through an array with while", () => {
    // arrange
    let index = 0;
    const names = ["Marcus", "Eliza", "Obaid"];

    // act
    while (index < names.length) {
      console.log(`Index is now '${index}'`);
      console.log(`Current element is '${names[index]}'`);

      index = index + 1;
    }
  });

  it("loop through an array with for", () => {
    const names = ["Tas", "Dani", "Adam"];

    for (let index = 0; index < names.length; index++) {
      console.log(`Index of Loop: ${index}`);
      console.log(`Current element is: '${names[index]}'`);
    }
  });

  it("calling getAge for each age", () => {
    const currentYear = 2022;
    const birthYears = [1972, 2022, 1980];
    for (let i = 0; i < birthYears.length; i++) {
      const age = getAge(birthYears[i], currentYear);
      console.log(
        `If you born in ${birthYears[i]} you are ${age} in ${currentYear}`
      );
    }
  });

  it("adding elements to array with push", () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid"];
    assert.equal(names.length, 3);

    // act
    names.push("Arvid");

    // arrange
    assert.equal(names.length, 4);
    assert.equal(names[3], "Arvid");
  });

  it("removing elements from array with pop", () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid", "Arvid"];
    assert.equal(names.length, 4);

    // act
    names.pop();

    // arrange
    assert.equal(names.length, 3);
    assert.equal(names[3], undefined);
  });

  //.splice takes two parameters, an index and a number of items to delete.

  it("removing elements from array using slice", () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid", "Arvid"];
    assert.equal(names.length, 4);

    // act
    names.splice(names.length - 1, 1);

    // arrange
    assert.equal(names.length, 3);
    assert.equal(names[3], undefined);
  });

  it("removing elements from the beginning array using slice", () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid", "Arvid"];
    assert.equal(names.length, 4);

    // act
    names.splice(0, 1);

    // arrange
    assert.equal(names.length, 3);
    assert.equal(names[0], "Eliza");
  });

  // Immutable

  it("adding elements to an immutable array", () => {
    // arrange
    const names = ["Marcus", "Eliza", "Obaid"];
    assert.equal(names.length, 3);

    // act
    const newNames = [...names, "Arvid"];

    // arrange
    assert.equal(names.length, 3);
    assert.equal(newNames.length, 4);
  });

  // Muteable Array
  it("filter an array - mutable", () => {
    // arrange
    const numbers = [10, 23, 1, 33, 8, 12];

    // act
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 10) {
        numbers.splice(i, 1);
      }
    }

    // arrange
    assert.equal(numbers.length, 3);
  });
  //immutable
  it("filter an array - immutable", () => {
    // arrange
    const numbers = [10, 23, 1, 33, 8, 12];

    // act
    const lowNumbers = numbers.filter((x) => x > 10);

    // arrange
    assert.equal(lowNumbers.length, 3);
  });
});

// Objects to modeling the world
describe("Object are for building things ", () => {
  it("Our first Object - a Human", () => {
    //act
    const person = {
      name: "Tas",
      birthYear: 1991,
      isStudent: true,
    };

    //assert
    assert.equal(person.name, "Tas");
    assert.equal(person.birthYear, 1991);
    assert.equal(person.isStudent, true);
  });

  it("get age for person", () => {
    // arrange
    const currentYear = 2022;
    const person = {
      name: "Marcus",
      birthYear: 1972,
      isTeacher: true,
    };

    // act
    const age = getAgeForPerson(person, currentYear);

    // assert
    assert.equal(age, 50);
  });

  it("a person has a list of favorite movies", () => {
    //arrange
    const person = {
      name: "Tas",
      favoriteMovies: ["Avator", "Star War", "Inception", "Three Idiots"],
    };

    //assert
    assert.equal(person.favoriteMovies[0], "Avator");
    assert.equal(person.favoriteMovies.length, 4);
    assert.equal(
      person.favoriteMovies[person.favoriteMovies.length - 1],
      "Three Idiots"
    );
  });

  it("a person has a list of favorite movies with releaseDate", () => {
    //arrange
    const person = {
      name: "Tas",
      favoriteMovies: [
        { movieName: "Avator", releaseYear: 2011 },
        { movieName: "Star War", releaseYear: 1977 },
        { movieName: "Inception", releaseYear: 2017 },
        { movieName: "Three Idiots", releaseYear: 2010 },
      ],
    };

    //assert
    assert.equal(person.favoriteMovies[0].movieName, "Avator");
    assert.equal(person.favoriteMovies.length, 4);
    assert.equal(person.favoriteMovies[2].releaseYear, 2017);
    assert.equal(
      person.favoriteMovies[person.favoriteMovies.length - 1].movieName,
      "Three Idiots"
    );
  });

  it("list of people with their favorite movies", () => {
    //arrange
    const people = [
      {
        name: "Tas",
        favoriteMovies: [
          { movieName: "Avator", releaseYear: 2011 },
          { movieName: "Star War", releaseYear: 1977 },
          { movieName: "Inception", releaseYear: 2017 },
          { movieName: "Three Idiots", releaseYear: 2010 },
        ],
      },
      {
        name: "Adam",
        favoriteMovies: [
          { movieName: "Spider Man", releaseYear: 2002 },
          { movieName: "Fish", releaseYear: 2009 },
          { movieName: "Baby Shark", releaseYear: 2011 },
          { movieName: "Coco Melon", releaseYear: 2005 },
        ],
      },
    ];

    //assert
    assert.equal(people[0].favoriteMovies[0].movieName, "Avator");
    assert.equal(people[0].name, "Tas");
    assert.equal(people[0].favoriteMovies.length, 4);
    assert.equal(people[0].favoriteMovies[2].releaseYear, 2017);
    assert.equal(
      people[1].favoriteMovies[people[1].favoriteMovies.length - 1].movieName,
      "Coco Melon"
    );
  });
});

//Exceptions
describe("division", () => {
  it("4 divided with 2 is 2", () => {
    //arrange
    const num1 = 4;
    const num2 = 2;
    //act
    const result = divide(num1, num2);
    //assert
    assert.equal(result, 2);
  });

  it("4 divided with 0 should throw error", () => {
    // arrange
    try {
      // act
      const result = divide(4, 0);
    } catch (error) {
      // assert
      assert.notEqual(error, undefined);
      assert.equal(
        error.message,
        "Please... No division by zero... I cannot cope with that. /Your computer"
      );
    }
  });

  // it("throwing an error in a test will...", () => {
  //   throw new Error("Reports as failing test");
  // });
});

//Functions Calling Funcations
describe("callbacks", () => {
  it("adding with logger", () => {
    // arrange

    // act
    const result = addWithLog(1, 89, (message) => console.log(message));

    // assert
    assert.equal(result, 90);
  });
});
