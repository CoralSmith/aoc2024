#!/usr/bin/env node

import { run as runDayOne } from "./src/one.mjs";
import { run as runDayTwo } from "./src/two.mjs";
import { run as runDayThree } from "./src/three.mjs";

function main() {
  console.log("Day 1");
  runDayOne("./src/inputs/day1.txt");

  console.log("Day 2");
  runDayTwo("./src/inputs/day2.txt");

  console.log("Day 3");
  runDayThree("./src/inputs/day3.txt");
}

main();
