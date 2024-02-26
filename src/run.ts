import { greet } from './index';

// Get the name argument from the command line
const name = process.argv[2];

console.log(greet(name));