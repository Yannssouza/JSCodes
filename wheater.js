const celsius = 55;
// Celsius Temperature

let fahrenheit = celsius * (9 / 5) + 32;
// Fahrenheit Temperature

fahrenheit = Math.floor(fahrenheit);
// Fahrenheit Round

let kelvin = celsius + 273.15;
// Kelvin Temperature

kelvin = Math.floor(kelvin);
// Kelvin Round

let newton = celsius * (33 / 100);
// Newton Convertion

newton = Math.floor(newton);
// Newton Round

console.log(`The temperature is ${celsius} degrees Celsius.`);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

console.log(`The temperature is ${kelvin} degrees Kelvin.`);

console.log(`The temperature is ${newton} degrees Newton.`);
