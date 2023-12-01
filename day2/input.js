
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'day2', 'input.txt');
export let day2input = [];

try {
    const data = fs.readFileSync(filePath, 'utf8');
    day2input = data.split(/\r?\n/);
} catch (err) {
    console.error('Error reading input', err);
}
