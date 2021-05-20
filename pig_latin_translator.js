// The vowels that I test single words & basic sentences against. For Pig Latin, Y would not be considered a vowel (my rules).
let vowels = ['A', 'E', 'I', 'O', 'U'];
// The regular expression is used to test for any lowercase letter in the beginning the single word or sentence.
let regex = /^[a-z]/;
// The single word input that will be translated & the basic sentence that will also be translated.
let singleWordInput = 'Flanders'.toUpperCase();
let sentenceInput = 'Zuli and Pebbles sitting on a ladder'.toUpperCase();



/*------------------
Sentence Translation
------------------*/

//Split the sentence into an array composed of the words making up the sentence.
let pigLatinSentence = sentenceInput.split(' ');
//Use .map() array method to break each word up into its letters and observe the consonant/vowels in the first (or first two letters) and make appropriate changes.
//Per Purdue University, the translation of English to Pig Latin follow three primary rules:
//Rule #1: If the word starts with a vowel, then simply add 'way' to the end of that word.
//Rule #2: If the word has a consonant as its first & second letter, then remove the first two letters, place it at the end of the word, then add 'ay'.
//Rule #3: If the word has a consonant for its first letter & a vowel for its second letter, then remove the first letter only & place it at the end of the word, then add 'ay'.
let pigLatinSentenceBroken = pigLatinSentence.map(word => {
    let x = [...word];
    for (let i = 0; i < vowels.length; i++) {
        //Rule #1 & corresponding changes.
        if (x[0] === 'A' || x[0] === 'E' || x[0] === 'I' || x[0] === 'O' || x[0] === 'U') {
            x.push('W','A','Y');
            break;
        };
        //Rule #3 & corresponding changes.
        if (x[0] !== vowels[i] && x[1] === 'A' || x[1] === 'E' || x[1] === 'I' || x[1] === 'O' || x[1] === 'U') {
            let convertThree = x.shift();
            x.push(convertThree);
            x.push('A', 'Y');
            break;
        };
        //Rule #2 & corresponding changes.
        if (x[0] !== vowels[i] && x[1] !== vowels[i]) {
            let convert = x.shift();
            let convertTwo = x.shift();
            x.push(convert);
            x.push(convertTwo);
            x.push('A', 'Y');
            break;
        };
    }
    //Placing each word, its letters joined back together again, in an array.
    let y = x.join('').toLowerCase();
    return y;
});
//Joining the words back together in a full sentence.
let boundPigLatinSentence = pigLatinSentenceBroken.join(' ');
//The next two lines consists on ensuring the first word of the translated sentence is capitalized.
let capitalizedSentence = boundPigLatinSentence[0].toUpperCase();
let renderedPigLatinSentence = boundPigLatinSentence.replace(regex, capitalizedSentence);

console.log(renderedPigLatinSentence);



/*---------------------
Single Word Translation
---------------------*/

let pigLatinConversion = [...singleWordInput];

for (let i = 0; i < vowels.length; i++) {
    if (pigLatinConversion[0] === 'A' || pigLatinConversion[0] === 'E' || pigLatinConversion[0] === 'I' || pigLatinConversion[0] === 'O' || pigLatinConversion[0] === 'U') {
        pigLatinConversion.push('W','A','Y');
        break;
    };
    if (pigLatinConversion[0] !== vowels[i] && pigLatinConversion[1] === 'A' || pigLatinConversion[1] === 'E' || pigLatinConversion[1] === 'I' || pigLatinConversion[1] === 'O' || pigLatinConversion[1] === 'U') {
        let convertThree = pigLatinConversion.shift();
        pigLatinConversion.push(convertThree);
        pigLatinConversion.push('A', 'Y');
        break;
    };
    if (pigLatinConversion[0] !== vowels[i] && pigLatinConversion[1] !== vowels[i]) {
        let convert = pigLatinConversion.shift();
        let convertTwo = pigLatinConversion.shift();
        pigLatinConversion.push(convert);
        pigLatinConversion.push(convertTwo);
        pigLatinConversion.push('A', 'Y');
        break;
    };
}


let pigLatin = pigLatinConversion.join('').toLowerCase();
let capitalPigLatin = pigLatin[0].toUpperCase();
let finalPigLatin = pigLatin.replace(regex, capitalPigLatin);

console.log(finalPigLatin);


/*--------------------------------------------
CREDITS FOR PIG LATIN TRANSLATION GOES TO. . .
//Credit goes to Purdue University for laying
out the basic understanding of Pig Latin: 
https://web.ics.purdue.edu/~morelanj/RAO/prepare2.html
--------------------------------------------*/