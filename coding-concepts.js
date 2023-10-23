// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Hotel 2023"
console.log(cohort.split(" "))

// a) Your answer: ['Hotel', '2023']
// b) Verify and explain: [ 'Hotel', '2023' ] The .split method splits a string in an array of strings and so apart from the output having single quote, what I figured would occur is what occured.

// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: "undefined"
// b) Verify and explain: I will admit at first glance I thought this was going to return what is written in the console log. Then I realized there is no "return", thus outputting "undefined".

// --------------------3) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [ 11, 13, 15 ]
// b) Verify and explain: [ 11, 13, 15 ] The .filter method creates a new array with all the elements that pass certain requirements, in this case it was modulo 2 not equal to zero. Meaning that if the remainders do not equal zero then they must be odd.

// --------------------4) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: Javascript
// b) Verify and explain: Using dot notation the specific key "language" was called upon in the console.log, with an index of 0. Thus calling upon the first string (Javascript) in the languages array and outputting it to the console.

// --------------------5) What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Hotel"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: name: 'George', cohort: 'Hotel', year: 2023
// b) Verify and explain: Learn { student: 'George', cohort: 'Hotel', year: 2023 }
                          // I knew it would print what it did but I forgot that it would print it in curly brackets with the class name at the beginning.
