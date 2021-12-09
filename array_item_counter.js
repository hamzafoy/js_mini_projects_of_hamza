//This function will take an array where the items may repeat and return the item where it repeats the most inside said array.

const chooseLunchWinner = (listOfChoices) => {
    //Code here!
    let firstChoice;
    let secondChoice;
    let firstChoiceCount = 0;
    let secondChoiceCount = 0;
    listOfChoices.forEach((item) => {
    //console.log(item)
    if (typeof firstChoice === 'undefined') {
    firstChoice = item;
    firstChoiceCount++;
    }
    
    if (item !== firstChoice && typeof secondChoice === 'undefined') {
    secondChoice = item;
    secondChoiceCount++;
    }
    
    if (item == firstChoice) {
    firstChoiceCount++;
    } else if (item == secondChoice) {
    secondChoiceCount++;
    }
    
    })
    //console.log(firstChoice);
    //console.log(secondChoice);
    
    return (firstChoiceCount > secondChoiceCount) ? firstChoice : secondChoice;
  }