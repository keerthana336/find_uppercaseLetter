// function wordsUppercase(str) {
//     return str.match(/[A-Z]/g) ; 
// }

// let words = "hEY GiRl This Is A Test";
// let uppercaseLetters = wordsUppercase(words);
// console.log(uppercaseLetters); 


function wordsUppercase(str) {
    const words = str.split(" ");
    // console.log(words);
    const storeUppercase = [];

    for (let word of words) {
        // Find uppercase letters in the word 
        const uppercaseLetters = word.match(/[A-Z]/g);
        if (uppercaseLetters) {
            storeUppercase.push(uppercaseLetters);
        }
    }

    return storeUppercase;
}

let words = "hEY GiRl This Is A Test";
let uppercaseLetters = wordsUppercase(words);
console.log(uppercaseLetters); 



