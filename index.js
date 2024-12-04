#!/usr/bin/env node

import { run as runDayOne } from "./2024/one.mjs";
import { run as runDayTwo } from "./2024/two.mjs";
import { run as runDayThree } from "./2024/three.mjs";

function main() {
  console.log("Day 1");
  runDayOne("./2024/inputs/day1.txt");

  console.log("Day 2");
  runDayTwo("./2024/inputs/day2.txt");

  console.log("Day 3");
  runDayThree("./2024/inputs/day3.txt");
}

main();
