// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.

// const numbersArray1 = [6, 7, 8, 9, 10]
// // Expected output: [18, 21, 24, 27, 30]
// const numbersArray2 = [24, 27, 30, 33, 36]
// // Expected output: [72, 81, 90, 99, 108]

// // b) Create the function that makes the test pass.

// describe('multipliedByThree', () => {
//     it('takes in an array of numbers and returns an array with all the numbers multiplied by 3', () => {
//       const numbersArray1 = [6, 7, 8, 9, 10]
//       // Expected output: [18, 21, 24, 27, 30]
//       const numbersArray2 = [24, 27, 30, 33, 36]
//       // Expected output: [72, 81, 90, 99, 108]
//       expect(multipliedByThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
//       expect(multipliedByThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
//     })
//   })

// // Pseudo code:
// // input: array of numbers
// // output: array with all numbers multiplied by three
// const multipliedByThree = (arr) => {
//     // iterate using .map
//     return arr.map((value) => {
//       // multiply current value of each iteration by 3
//       // return product in the new array created by .map
//       return value * 3
//     })
//   }

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

describe("divisibleByThree", () => {
    it("takes a object as an argument and decides if the number inside it is evenly divisible by three or not", () => {
        const object1 = { number: 15 }
        const object2 = { number: 0 }
        const object3 = { number: -7 }
        // Expected output: "15 is divisible by three"
        // Expected output: "0 is divisible by three"
        // Expected output: "-7 is not divisible by three"
        expect(divisibleByThree(object1)).toEqual("15 is divisible by three")
        expect(divisibleByThree(object2)).toEqual("0 is divisible by three")
        expect(divisibleByThree(object3)).toEqual("-7 is not divisible by three")
    })
})

// ReferenceError: divisibleByThree is not defined


// b) Create the function that makes the test pass.

// // Pseudo code:
const divisibleByThree = (object) => {
    // iterate with if statement using modulo 3
    // compare remainder of each object to 0
    if (object.number % 3 === 0) {
        return `${object.number} is divisible by three`
        // return if object number is divisible by three or not
      } else {
        return `${object.number} is not divisible by three`
      }
}
  

// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// a) Create a test with expect statements for each of the variables provided.

describe("wordsCapitalized", () => {
    it("takes in an array of words and returns an array with all the words capitalized", () => {
        const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
        const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
        // Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
        // Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]
        expect(wordsCapitalized(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(wordsCapitalized(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// ReferenceError: wordsCapitalized is not defined

// b) Create the function that makes the test pass.

// Pseudo code:
// input: array of random nouns
// output: array of random nouns with capitalizations
const wordsCapitalized = (array) => {
    // iterate with .map
    return array.map((string) => {
        // using .charAt and .toUpperCase identify and capitalize the first letter in each string
        // using .slice join the rest of the word in each string to the array
       return string.charAt(0).toUpperCase() + string.slice(1)
    })
}


