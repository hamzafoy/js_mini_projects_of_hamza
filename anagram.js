//Andrew showed this very short & quick manner of determining whether the two words are anagrams.
function anagramTwo(word1, word2) {
    return word1.split('').sort() == word2.split('').sort()
}


//Hamza's attempt after interview.
function anagramThree(word1, word2) {
    let first = word1.split('').map(letter => {
        let lettersOfFirstWord = [...letter];
        return lettersOfFirstWord;
    });
    let flatFirst = first.flat();
    let flatFirstAgain = first.flat();
    //console.log(flatFirst)

    let second = word2.split('').map(letter => {
        let lettersOfSecondWord = [...letter];
        return lettersOfSecondWord;
    });
    let flatSecond = second.flat();
    //console.log(flatSecond)

    for(char of flatSecond) {
        //console.log(char)
        const index = flatFirst.findIndex(elem => elem === char);
        //console.log(index);
        //Since `.findIndex()` will return -1 if the index is not found, I hid the splicing method behind an if conditional.
        if(index !== -1) {
            flatFirst.splice(index, 1);
            //console.log(flatFirst)
        }
    }
    //console.log(flatFirst.length)

    for(char of flatFirstAgain) {
        //console.log(char)
        const index2 = flatSecond.findIndex(elem => elem === char);
        //console.log(index2);
        //Since `.findIndex()` will return -1 if the index is not found, I hid the splicing method behind an if conditional.
        if(index2 !== -1) {
            flatSecond.splice(index2, 1);
            //console.log(flatFirst)
        }
    }
    //console.log(flatSecond.length)

    if(flatFirst.length === flatSecond.length && flatFirst.length === 0 && flatSecond.length === 0) {
        return true;
    } else {
        return false;
    }
    
}

//anagram('hamza', 'zahm');
//console.log(anagramTwo('hamza', 'zahm'))



//Testing Anagram Examples & Edge Cases

console.log(anagramThree('rat', 'tar')); //EXPECTED OUTPUT: TRUE
console.log(anagramThree('rats', 'tar')); //EXPECTED OUTPUT: FALSE
console.log(anagramThree('rats', 'star')); //EXPECTED OUTPUT: TRUE
console.log(anagramThree('drats', 'tars')); //EXPECTED OUTPUT: FALSE
console.log(anagramThree('rats', 'stars')); //EXPECTED OUTPUT: FALSE
console.log(anagramThree('hamza', 'zahm')); //EXPECTED OUTPUT: FALSE
console.log(anagramThree('hamz', 'zahma')); //EXPECTED OUTPUT: FALSE
console.log(anagramThree('stressed', 'desserts')); //EXPECTED OUTPUT: TRUE
console.log(anagramThree('hamza', 'zahmahz')) //EXPECTED OUTPUT: FALSE
console.log(anagramThree('zahmazz', 'hamza')) //EXPECTED OUTPUT: FALSE
console.log(anagramThree('hamza', 'codex')) //EXPECTED OUTPUT: FALSE
console.log(anagramThree('saturnal', 'hamza'))