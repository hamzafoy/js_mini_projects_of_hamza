let singleWordInput = 'Flanders'.toUpperCase();
let pigLatinConversion = [...singleWordInput];
let vowels = ['A', 'E', 'I', 'O', 'U'];

for (let i = 0; i < vowels.length; i++) {
    if (pigLatinConversion[0] === 'A' || pigLatinConversion[0] === 'E' || pigLatinConversion[0] === 'I' || pigLatinConversion[0] === 'O' || pigLatinConversion[0] === 'U') {
        pigLatinConversion.push('W','A','Y');
        break;
    };
    if (pigLatinConversion[0] !== vowels[i] && pigLatinConversion[1] === 'A' || pigLatinConversion[1] === 'E' || pigLatinConversion[1] === 'I' || pigLatinConversion[1] === 'O' || pigLatinConversion[1] === 'U') {
        let convertThree = pigLatinConversion.shift();
        console.log(convertThree)
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

console.log(pigLatinConversion.join(''));