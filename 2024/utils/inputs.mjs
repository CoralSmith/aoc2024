import { readFileSync } from "node:fs";

export function getAsString(fileLocation) {
  return readFileSync(fileLocation).toString();
}

export class Field {
  field = [];
  rows;
  /**
   * Represents a 2D field where you're gonna wanna access stuff like pt(x,y)
   * using 0 based indexing.
   */
  constructor(field_str, separator = " ") {
    for (let row of field_str.split("\n")) {
      this.field.push(row.split(separator).map((p) => parseInt(p, 10)));
    }
    this.rows = this.field;
  }

  columns() {
    throw "not implemented";
  }

  pt(x, y) {
    return this.field[y][x];
  }
}

export function isAsc(arr) {
  return arr.join() === arr.toSorted((a, b) => a - b).join();
}

export function isDesc(arr) {
  return (
    arr.join() ===
    arr
      .toSorted((a, b) => a - b)
      .toReversed()
      .join()
  );
}
