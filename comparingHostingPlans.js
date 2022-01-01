/**
 * The following objects will represent fictional
 * website hosting plans and contain properties and
 * methods that contain information and handle calculations
 * so someone can compare plans.
 *
 */

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(`What is your name?`, function(name) {
    console.log(`Hello ${name}, welcome to the Node plan processor!`);
    rl.close();
});

rl.on('close', function() {
    console.log(`This is Node planning processor closing, Goodbye!`);
    process.exit(0);
})