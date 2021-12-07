const fs = require("fs");
const { sonarSweep, sonarSweepSliding } = require("./sonar-sweep");

describe("sonarSweep", () => {
  it("handles the introductory example", () => {
    const report = `199
  200
  208
  210
  200
  207
  240
  269
  260
  263`;
    const expected = 7;
    expect(sonarSweep(report)).toBe(expected);
  });

  it("outputs an answer for the provided challenge input", () => {
    const report = fs.readFileSync("./01-sonar-sweep/input.txt", "utf-8");
    const expected = 1521;
    expect(sonarSweep(report)).toBe(expected);
  });
});

describe("sonarSweepSliding", () => {
  it("handles the introductory example", () => {
    const report = `199
    200
    208
    210
    200
    207
    240
    269
    260
    263`;
    const expected = 5;
    expect(sonarSweepSliding(report)).toBe(expected);
  });

  it("outputs an answer for the provided challenge input", () => {
    const report = fs.readFileSync("./01-sonar-sweep/input.txt", "utf-8");
    const expected = 1543;
    expect(sonarSweepSliding(report)).toBe(expected);
  });
});
