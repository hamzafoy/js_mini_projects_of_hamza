/**
 * The following objects will represent fictional
 * website hosting plans and contain properties and
 * methods that contain information and handle calculations
 * so someone can compare plans.
 *
 */

class hostingPlan {
    constructor(name, ratePerHour, storageSpace, numOfWebPages) {
        this.name = name;
        this.ratePerHour = ratePerHour;
        this.storageSpace = storageSpace;
        this.numOfWebPages = numOfWebPages;
    }
}

let basicHosting = new hostingPlan('Basic Hosting', 3.99, 100, 5);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`What is your name? `, function(name) {
    console.log(`Hello ${name}, please view our basic hosting plan: ${basicHosting.name} with a low price of ${basicHosting.ratePerHour}!`);
    rl.close();
});

rl.on('close', function() {
    console.log(`This is Node planning processor closing, Goodbye!`);
    process.exit(0);
})