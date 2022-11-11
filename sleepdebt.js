const getActualSleepHours = () => 6 + 5 + 5 + 6 + 8 + 7 + 12;

const getIdealSleepHours = () => 7 * 7;

function calculateSleepDebt() {
    const actualSleepHours = getActualSleepHours();
    const idealSleepHours = getIdealSleepHours();
    const calculatedSleepHours = actualSleepHours - idealSleepHours;
    if (actualSleepHours === idealSleepHours) {
        console.log("You got the perfect amount of sleep.");
    } else if (actualSleepHours > idealSleepHours) {
        console.log("You got more sleep than needed.");
    } else if (actualSleepHours < idealSleepHours) {
        console.log(
            `You got ${calculatedSleepHours} hour(s) you should get some rest."`
        );
    }
}

calculateSleepDebt();
