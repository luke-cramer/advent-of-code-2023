import { day3example, day3input } from "./input.js";

const inputGrid = day3input.map((line) => line.split(''));
let totalSum = 0;

// each line containing a map of full numbers at each position 💨
const mapLineNumbers = []

const mapNumbers = () => {
    for (let i = 0; i < inputGrid.length; i++) {
        const numMap = {};
        let currentNumber = { startIndex: -1, value: '' };
        for (let j = 0; j < inputGrid[i].length; j++) {
            if (currentNumber.startIndex === -1 && inputGrid[i][j].match(/\d/)) {
                currentNumber = { startIndex: j, value: '' }
            }

            if (inputGrid[i][j].match(/\d/)) {
                currentNumber.value += inputGrid[i][j];
            }

            if (!inputGrid[i]?.[j + 1]?.match(/\d/)) {
                for (let k = currentNumber.startIndex; k < currentNumber.startIndex + currentNumber.value.length; k++) {
                    numMap[k] = currentNumber;
                }
                currentNumber = { startIndex: -1, value: '' }
            }
        }
        mapLineNumbers.push(numMap)

    }
}

const calculateProductAdjacent = (i, j) => {
    let count = 0;
    let product = 1;
    const directions = [
        [
            [-1, -1], [-1, 0], [-1, 1],
        ],
        [
            [0, -1], [0, 1]],
        [
            [1, -1], [1, 0], [1, 1]
        ]
    ];

    for (let di = 0; di < directions.length; di++) {
        let currentStartIndex = -1;
        for (let dj = 0; dj < directions[di].length; dj++) {
            // cursed indexing 😭 ====>>>
            let adjacent = mapLineNumbers[i + directions[di][dj][0]]?.[j + directions[di][dj][1]]

            if (adjacent != null && adjacent.startIndex !== currentStartIndex) {
                product *= adjacent.value;
                currentStartIndex = adjacent.startIndex;
                count++;
            }
        }
    }

    return count == 2 ? product : 0;
}

const calculateResult = () => {
    for (let i = 0; i < inputGrid.length; i++) {
        for (let j = 0; j < inputGrid[i].length; j++) {
            if (inputGrid[i][j] === '*') {
                totalSum += calculateProductAdjacent(i, j);
            }
        }
    }
}

mapNumbers();
calculateResult();
console.log('🧮', totalSum);