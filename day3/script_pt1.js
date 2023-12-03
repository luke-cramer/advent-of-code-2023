import { day3example, day3input } from "./input.js";

// console.log('test example input', day3example)

const testLine = '..123..';

const createLineNumberMap = (line) => {
    const numberMap = {};
    const lineChars = line.split('');

    for (let i = 0; i < lineChars.length; i++) {
        let j = i;
        numberMap[i] = -1;
        let currentNum = '';

        while (!isNaN(parseInt(lineChars[j]))) {
            currentNum += lineChars[j];
            j++;
        }

        while (i < j) {
            numberMap[i] = currentNum;
            i++;
        }
    }

    return numberMap;
}

const lineMaps = []
day3input.forEach((line) => {
    lineMaps.push(createLineNumberMap(line));
});

console.log('LINEMAPS', lineMaps);

const linesArray = day3input.map((line) => line.split(''));

const sumNearbyNumbers = (i, j) => {
    let sum = 0;
    const topLeft = lineMaps[i - 1]?.[j - 1] ?? -1;
    const top = lineMaps[i - 1]?.[j] ?? -1;
    const topRight = lineMaps[i - 1]?.[j + 1] ?? -1;
    const left = lineMaps[i]?.[j - 1] ?? -1;
    const right = lineMaps[i]?.[j + 1] ?? -1;
    const bottomLeft = lineMaps[i + 1]?.[j - 1] ?? -1
    const bottom = lineMaps[i + 1]?.[j] ?? -1;
    const bottomRight = lineMaps[i + 1]?.[j + 1] ?? -1;

    // check top row
    if (topLeft !== -1) {
        if (top !== -1) {
            if (topRight !== -1) {
                console.log('adding1', topRight)
                sum += parseInt(topRight)
            } else {
                console.log('adding2', top)
                sum += parseInt(top)
            }
        } else {
            console.log('adding3', topLeft)
            sum += parseInt(topLeft)
            if (topRight !== -1) {
                console.log('adding4', topRight)
                sum += parseInt(topRight)
            }
        }
    } else {
        if (top !== -1) {
            if (topRight !== -1) {
                console.log('adding5', topRight)
                sum += parseInt(topRight)
            } else {
                console.log('adding6', top)
                sum += parseInt(top)
            }
        } else {
            if (topRight !== -1) {
                console.log('adding7', topRight)
                sum += parseInt(topRight)
            }
        }
    }

    // check middle row
    if (left !== -1) {
        console.log('adding8', left)
        sum += parseInt(left)
    }
    // skip middle
    if (right !== -1) {
        console.log('adding9', right)
        sum += parseInt(right)
    }

    // check bottom row
    if (bottomLeft !== -1) {
        if (bottom !== -1) {
            if (bottomRight !== -1) {
                console.log('adding10', bottomRight)
                sum += parseInt(bottomRight)
            } else {
                console.log('adding11', bottom)
                sum += parseInt(bottom)
            }
        } else {
            console.log('adding12', bottomLeft)
            sum += parseInt(bottomLeft)
            if (bottomRight !== -1) {
                console.log('adding13', bottomRight)
                sum += parseInt(bottomRight)
            }
        }
    } else {
        if (bottom !== -1) {
            if (bottomRight !== -1) {
                console.log('adding14', bottomRight)
                sum += parseInt(bottomRight)
            } else {
                console.log('adding15', bottom)
                sum += parseInt(bottom)
            }
        } else {
            if (bottomRight !== -1) {
                console.log('adding16', bottomRight)
                sum += parseInt(bottomRight)
            }
        }
    }


    console.log('sum for line', i, sum)
    return sum;
}

// i = line
console.log('linesAsCharArray', linesArray)
let totalSum = 0;
for (let i = 0; i < linesArray.length; i++) {
    for (let j = 0; j < linesArray[i].length; j++) {
        // console.log('arr[i][j]', linesArray[i][j])
        if (!linesArray[i][j].match(/\d/) && linesArray[i][j] !== '.') {
            console.log(linesArray[i][j], i, j,)
            totalSum += sumNearbyNumbers(i, j);
            console.log('totalSum', totalSum)
        }
    }
}
console.log('totalSum', totalSum)
