let username = `Hamza Foy`;

username ? console.log(`Hello ${username}`) : console.log(`Hello stranger!`);

let userQ = `Random Eight Ball, if I shake you, will you give me a random answer?`;

let randomNumber = Math.floor(Math.random()*8);

let randomEightBall = ``;

switch (randomNumber) {
    case 0:
    randomEightBall = `It is certain`
    break;
    case 1:
    randomEightBall = `It is decidedly so`
    break;
    case 2:
    randomEightBall = `I can't get a clear reading, try again`
    break;
    case 3:
    randomEightBall = `I am sure if you shake me again, I'll spit out something else random!`
    break;
    case 4:
    randomEightBall = `Do not count on it`
    break;
    case 5:
    randomEightBall = `I have it on reliable sources that the answer is resoundingly no`
    break;
    case 6:
    randomEightBall = `I'll say yes to make you feel better`
    break;
    case 7:
    randomEightBall = `Nah.`
    break;
};

console.log(randomEightBall);