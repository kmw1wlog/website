import assert from 'assert';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dataDir = path.join(__dirname, 'data');
const reviews = JSON.parse(fs.readFileSync(path.join(dataDir, 'reviews.json')));

// Test that reviews load correctly
assert.ok(reviews.length > 0, 'Should load reviews');

console.log('Tests passed');
