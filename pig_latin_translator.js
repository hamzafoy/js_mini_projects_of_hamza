// The vowels that I test single words & basic sentences against. For Pig Latin, Y would not be considered a vowel (my rules).
let vowels = ['A', 'E', 'I', 'O', 'U'];
// The regular expression is used to test for any lowercase letter in the beginning the single word or sentence.
let regex = /^[a-z]/;
// The single word input that will be translated & the basic sentence that will also be translated.
let singleWordInput = 'Flanders'.toUpperCase();
let sentenceInput = 'Zuli and Pebbles sitting on a ladder'.toUpperCase();


let pigLatinSentence = sentenceInput.split(' ');
let pigLatinSentenceBroken = pigLatinSentence.map(word => {
    let x = [...word];
    for (let i = 0; i < vowels.length; i++) {
        if (x[0] === 'A' || x[0] === 'E' || x[0] === 'I' || x[0] === 'O' || x[0] === 'U') {
            x.push('W','A','Y');
            break;
        };
        if (x[0] !== vowels[i] && x[1] === 'A' || x[1] === 'E' || x[1] === 'I' || x[1] === 'O' || x[1] === 'U') {
            let convertThree = x.shift();
            x.push(convertThree);
            x.push('A', 'Y');
            break;
        };
        if (x[0] !== vowels[i] && x[1] !== vowels[i]) {
            let convert = x.shift();
            let convertTwo = x.shift();
            x.push(convert);
            x.push(convertTwo);
            x.push('A', 'Y');
            break;
        };
    }
    let y = x.join('').toLowerCase();
    return y;
});
let boundPigLatinSentence = pigLatinSentenceBroken.join(' ');
let capitalizedSentence = boundPigLatinSentence[0].toUpperCase();
let renderedPigLatinSentence = boundPigLatinSentence.replace(regex, capitalizedSentence);


//console.log(pigLatinSentenceBroken);
//console.log(boundPigLatinSentence);
console.log(renderedPigLatinSentence);



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