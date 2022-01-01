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

    calculateHourlyRate(numOfHours) {
        return 
    }
}

let basicHosting = new hostingPlan('Basic Hosting', 3.99, 100, 5);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`What is your name? `, function(name) {
    rl.question(`Type 'A' to review plan's storage space, type 'B' to calculate estimated costs for plan`, function(option) {
        switch (option == 'A') {
            case true:
            console.log(`You can expect to have ${basicHosting.storageSpace}MB of space with this plan!`);
            rl.close();
            case false:
                rl.question(`How many hours are you estimating your website would cost to develop? `, function(answer) {
                    let calculations = (3.99 * answer);
                    console.log(`Expect to pay upwards of ${calculations} dollars.`);
                    rl.close();
                })
        }
    })
    //console.log(`Hello ${name}, please view our basic hosting plan: ${basicHosting.name} with a low price of ${basicHosting.ratePerHour}!`);
});

rl.on('close', function() {
    console.log(`This is Node planning processor closing, Goodbye!`);
    process.exit(0);
})