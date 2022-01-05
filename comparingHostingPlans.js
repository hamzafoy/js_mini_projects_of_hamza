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
        return (numOfHours * this.ratePerHour);
    }
}

let basicHosting = new hostingPlan('Basic Hosting', 3.99, 100, 5);
let mediumHosting = new hostingPlan('Medium Hosting', 5.79, 200, 10);
let advancedHosting = new hostingPlan('Advanced Hosting', 7.29, 350, 25);

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`What is your name? `, function(name) {
    rl.question(`${name}, type 'A' to calculate estimated costs with our basic plan, type 'B' to calculate estimated costs with our medium plan, or type 'C' to calculate estimated costs with our advanced plan `, function(option) {
        switch (option) {
            case 'A':
                rl.question(`How many hours are you estimating your website would cost to develop? `, function(answer) {
                    console.log(`Expect to pay upwards of ${basicHosting.calculateHourlyRate(answer)} dollars.`);
                    rl.close();
                })
            case 'B':
                rl.question(`How many hours are you estimating your website would cost to develop? `, function(answer) {
                    console.log(`Expect to pay upwards of ${mediumHosting.calculateHourlyRate(answer)} dollars.`);
                    rl.close();
                })
            case 'C':
                rl.question(`How many hours are you estimating your website would cost to develop? `, function(answer) {
                    console.log(`Expect to pay upwards of ${advancedHosting.calculateHourlyRate(answer)} dollars.`);
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