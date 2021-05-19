let singleWordInput = 'Field'.toUpperCase();
let pigLatinConversion = [...singleWordInput];
let vowels = ['A', 'E', 'I', 'O', 'U'];

for (let i = 0; i < vowels.length; i++) {
    if (vowels[i] === pigLatinConversion[0]) {
        pigLatinConversion.push('W','A','Y');
        break;
    };
    if (pigLatinConversion[0] !== vowels[i] && pigLatinConversion[1] === vowels[i]) {
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

console.log(pigLatinConversion);