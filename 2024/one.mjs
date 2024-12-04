import { getAsString } from "./utils/inputs.mjs";

export function run(input) {
  const list_a = [];
  const list_b = [];

  const raw_data = getAsString(input);
  for (let row of raw_data.split("\n")) {
    let [a, b] = row.split("   ");
    list_a.push(parseInt(a, 10));
    list_b.push(parseInt(b, 10));
  }
  list_a.sort();
  list_b.sort();

  let totalDifference = 0;
  let totalSimilarity = 0;
  for (const x in list_a) {
    totalDifference += Math.abs(list_a[x] - list_b[x]);
    totalSimilarity += list_a[x] * list_b.filter((i) => i === list_a[x]).length;
  }
  console.log("Difference: ", totalDifference);
  console.log("Similarity: ", totalSimilarity);
}