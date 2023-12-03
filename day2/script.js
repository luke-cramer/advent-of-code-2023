import { day2example, day2input } from "./input.js";

let totalPower = 0;

// check each line that colors aren't over the max
// eg. Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
day2input.forEach((line) => {
    const splitGame = line.split(': ');
    const subsets = splitGame[1].split(';');

    const colorMinimum = {
        red: 0,
        green: 0,
        blue: 0
    }

    // loop through sets
    subsets.forEach((subset) => {
        const colorAmounts = subset.split(',');

        // loop through colors
        colorAmounts.forEach((colorAmount) => {
            const colorAndAmount = colorAmount.trim().split(' ');
            const amount = parseInt(colorAndAmount[0]);
            const colorName = colorAndAmount[1];

            if (amount > colorMinimum[colorName]) {
                colorMinimum[colorName] = amount;
            }
        })
    });

    totalPower += colorMinimum.red * colorMinimum.green * colorMinimum.blue;
});

console.log('totalPower: ', totalPower);