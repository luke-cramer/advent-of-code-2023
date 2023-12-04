import fs from 'fs';
import path from 'path';

const currentDir = path.dirname(new URL(import.meta.url).pathname);
const inputPath = path.join(currentDir, 'input.txt');
const examplePath = path.join(currentDir, 'example.txt');

let example = [];
let input = [];

try {
    const exampleData = fs.readFileSync(examplePath, 'utf8');
    const data = fs.readFileSync(inputPath, 'utf8');

    example = exampleData.split(/\r?\n/);
    input = data.split(/\r?\n/);
} catch (err) {
    console.error('Error reading input', err);
}

// edit day to match folder name
export const day4example = example;
export const day4input = input;
