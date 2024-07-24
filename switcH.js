//Building switch cases without using break statement
// let x = 25;
// switch (true) {
//     case (x > 10 && x < 20):
//         console.log("x is between 10 and 20");
//     case (x > 20 && x < 50):
//         console.log("x is between 20 and 50");
// }
//Building switch cases using break statement
const operations = prompt('Enter What you want to perform:');
const num1 = Number(prompt('Enter First Number:'));
const num2 = Number(prompt('Enter Second Number:'));
let result;
switch (operations) {
    case 'add':
        result = num1 + num2;
        console.log(`Addition: ${num1} + ${num2} = ${result}`);
        break;
    case 'substract':
        result = num1 - num2;
        console.log(`Addition: ${num1} - ${num2} = ${result}`);
        break;
    case 'multiply':
        result = num1 * num2;
        console.log(`Addition: ${num1} * ${num2} = ${result}`);
        break;
    case 'divide':
        result = num1 / num2;
        console.log(`Addition: ${num1} / ${num2} = ${result}`);
        break;
    default:
        console.log('Invalid operation');
}
//perform this switch operation





