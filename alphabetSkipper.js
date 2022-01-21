const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let alphabetArray = alphabet.split('');
let splitAlphabet = alphabetArray.filter(function(val, index) {
return !(index%2);
})

console.log(splitAlphabet.toString());

//Generates a string containing every other letter of the English alphabet.