// Today's forecast is 293 Kelvin.
const kelvin = 0;
// Converting from Kevlin to Celsius.
const celsius = kelvin - 273;
// Converting from Celsius to Fahrenheit.
let fahrenheit = celsius * (9 / 5) + 32;
// Rounding down the Fahrenheit temp.
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// Converting Celsius to the Newton scale.
let newton = celsius * (33 / 100);
// Rounding down the Newton temp.
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);
