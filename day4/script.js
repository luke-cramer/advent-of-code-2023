import { day4example, day4input } from "./input.js";

const input = day4input.map((line) => line.split(': ')[1])
const winningNumbers = input.map((line) => line.split(' | ')[0].split(' ').map((num) => parseInt(num)).filter((num) => !isNaN(num)))
const myTicket = input.map((line) => line.split(' | ')[1].split(' ').map((num) => parseInt(num)).filter((num) => !isNaN(num)))
const queue = [];
const copyMap = {};
let totalCount = 0;

const pushToQueue = (i, count) => {
    for (let j = i + 1; j < count + i + 1; j++) {
        queue.push(j);
    }
}

const countMatches = (i) => {
    const line = winningNumbers[i];
    let count = 0;

    line?.forEach((num) => {
        if (myTicket[i].includes(num)) {
            count++;
        }
    })

    if (count > 0) {
        copyMap[i] = count;
        pushToQueue(i, count)
    }
}

winningNumbers.forEach((_, i) => {
    // original cards
    totalCount++;
    countMatches(i)
});

while (queue.length > 0) {
    // each copy
    totalCount++;
    const i = queue.pop();

    pushToQueue(i, copyMap[i])
}

console.log('🧮', totalCount)