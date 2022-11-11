let raceNumber = Math.floor(Math.random() * 1000);
let registeredEarly = false;
let runnerAge = 22;

if (runnerAge >= 18 && registeredEarly === true) {
    raceNumber += 1000;
}

if (runnerAge >= 18 && registeredEarly) {
    console.log(`You will race at 9:30am. Your race number is ${raceNumber}.`);
} else if (runnerAge > 18 && !registeredEarly) {
    console.log(`You will race at 11:00am. Your race number is ${raceNumber}.`);
} else if (runnerAge < 18) {
    console.log(`You will race at 12:30am. Your race number is ${raceNumber}.`);
} else {
    console.log("See the registration desk.");
}
