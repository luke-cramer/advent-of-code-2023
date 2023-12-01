import {testInput1, input, testInput2, testInput3 } from "./input";

const wordToNumber: {[key: string]: string} = { 
    one: '1',
    two: '2',
    three: '3',
    four: '4',
    five: '5',
    six : '6',
    seven: '7',
    eight: '8',
    nine: '9',
}

const getNumber = (match: any) => {
    if (parseInt(match)) {
        return parseInt(match);
    }

    return wordToNumber[match];
}

const regexForwards = /\d|(one)|(two)|(three)|(four)|(five)|(six)|(seven)|(eight)|(nine)/;
const regexBackwards = /\d|(eno)|(owt)|(eerht)|(ruof)|(evif)|(xis)|(neves)|(thgie)|(enin)/;

const result = input.reduce((sum, line) => {
    const firstMatch = line.match(regexForwards)?.[0];

    const lineReversed = line.split("").reverse().join("");
    const lastMatchReversed = lineReversed.match(regexBackwards)?.[0];
    const lastMatch = lastMatchReversed?.split("").reverse().join("")

    return sum + parseInt(`${getNumber(firstMatch)}${getNumber(lastMatch)}`);
}, 0)

console.log(result)