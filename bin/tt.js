#!/usr/bin/env node
const { program } = require("commander");

program
  .description("An application for pizza ordering")
  .option("-p, --peppers", "Add peppers")
  .option("-c, --cheese <type>", "Add the specified type of cheese", "marble")
  .option("-C, --no-cheese", "You do not want any cheese");

program.parse();

const options = program.opts();
console.log("you ordered a pizza with:");
if (options.peppers) console.log("  - peppers");
const cheese = !options.cheese ? "no" : options.cheese;
console.log("  - %s cheese", cheese);
