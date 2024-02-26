"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("./index");
// Get the name argument from the command line
var name = process.argv[2];
console.log((0, index_1.greet)(name));
