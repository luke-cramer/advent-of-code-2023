import { day4example, day4input } from "./input.js";

console.log(day4example)

const input = day4input.map((line) => line.split(': ')[1])

const winningNumbers = input.map((line) => line.split(' | ')[0].split(' ').map((num) => parseInt(num)).filter((num) => !isNaN(num)))

const myTicket = input.map((line) => line.split(' | ')[1].split(' ').map((num) => parseInt(num)).filter((num) => !isNaN(num)))

console.log('winningNumbers', winningNumbers)
console.log('myTicket', myTicket)

let totalSum = 0;
winningNumbers.forEach((line, i) => {
    let count = 0;
    line.forEach((num) => {
        if (myTicket[i].includes(num)) {
            console.log('valid', num)
            count++;
        }
    })
    if (count > 0) {
        totalSum += Math.pow(2, count - 1)
    }
});

console.log('totalSum', totalSum)