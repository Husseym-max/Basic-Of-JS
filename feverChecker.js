const tempF = prompt('Enter the temp In Farhenhite:');
const tempC = ((tempF - 32) * 5/9).toFixed(2);
const tempCNumber = parseFloat(tempC);
console.log(tempC);
if(tempCNumber >= 37){
    console.log(`You have Fever and your body Temperature is ${tempC} in Celsius;`);
}
else{
    console.log(`You don't have Fever and your body Temperature is ${tempC} in Celsius;`)
}