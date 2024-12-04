import { getAsString } from "./utils/inputs.mjs";

export function run(input) {
  const memory = getAsString(input);
  let simpleResult = 0;
  for (let [_, i, j] of memory.matchAll(/mul\((\d{1,3})\,(\d{1,3})\)/g)) {
    simpleResult += parseInt(i) * parseInt(j);
  }

  let actionMemory = true;
  let programResult = 0;
  for (let match of memory.matchAll(/mul\((\d{1,3})\,(\d{1,3})\)|do\(\)|don\'t\(\)/g)) {
    if (match[0].startsWith("mul") && actionMemory) {
      programResult += parseInt(match[1]) * parseInt(match[2]);
    } else {
      actionMemory = match[0] === "do()";
    }
  }

  console.log("Summed Multiplications: ", simpleResult);
  console.log("Program Multiplications: ", programResult);
}
