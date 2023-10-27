// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.

function findFirstVowelIndex(inputString) {
    const vowels = "AEIOUaeiou"
  
    for (let index = 0; index < inputString.length; index++) {
      const char = inputString[index];
      if (vowels.includes(char)) {
        console.log(`The first vowel '${char}' is at index ${index}.`);
        return; 
      }
    }
  
    console.log("No vowels found in the input string.");
  }

  
  // Critique the code output. 
  // Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 
  
// Well it is a function, albeit a very oddly written one. It put the word "index" rather than just a letter "i" but that's a non-issue since it's still read the same. There's a console.log on line 15 when there should be a return. line 16 should be an else statement and the final return should be on 17 with the string from line 20. Since line 20 has a console.log to go with it's misplaced string the console logs that as "undefined". Then there's the semicolons on lines 13, 16 (after the return that's already in the wrong place), and 20 (which is also wrong for several reasons) which doesn't hurt the code, but doesn't need to be there.

// So to put it simply, it gets the right output (if you ignore the "undefined") but the code is sloppy. It very much says "it'll get the job done" rather than "here is your solution" and I don't like that. Now yes this is code written by an AI and not a person but it still baffles me that such a smart AI could still have such simple errors. So what have I learned? As we have been told, don't rely on artificial intelligence to do all the work. It can be used to supplment and explain in small chunks so long as you already have a general idea of the knowledge you're looking for. But if you're looking for solid solutions to things you are genuinely confused about, consult a forum.

// Leaving AI out of it, I would tell a person who wrote this that "close enough" is just a friendlier way of saying something is wrong. Then I would show them the errors I found in the code.
  
//   console.log(findFirstVowelIndex(" Where there any vowels?"))

// Output: The first vowel 'e' is at index 3.
//         undefined