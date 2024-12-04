import { getAsString, Field, isAsc, isDesc } from "./utils/inputs.mjs";

function acceptableRateChange(i, j) {
  return [1, 2, 3].includes(Math.abs(i - j));
}

function isSafe(report) {
  const constantRate = isAsc(report) || isDesc(report);

  const safeLevels = [];
  for (let i = 0; i < report.length - 1; i++) {
    safeLevels.push(acceptableRateChange(report[i], report[i + 1]));
  }
  return constantRate && safeLevels.every((l) => l);
}

export function run(input) {
  const raw_data = getAsString(input);
  const field = new Field(raw_data);

  const safeReports = [];
  const lowDeviationReports = [];
  
  for (const report of field.rows) {
    const safe = isSafe(report);
    safeReports.push(safe);

    let singleBadLevel = false;
    if (!safe) {
      let singleDeviationSafe = [];
      for (let i = 0; i < report.length; i++) {
        const reportLessItem = report.toSpliced(i, 1);
        singleDeviationSafe.push(isSafe(reportLessItem));
      }
      singleBadLevel = singleDeviationSafe.filter((l) => l).length > 0;
    }

    lowDeviationReports.push(safe || singleBadLevel);
  }

  console.log("Number of safe reports: ", safeReports.filter((r) => r).length);
  console.log("Number of single deviation reports: ", lowDeviationReports.filter((r) => r).length);
}
