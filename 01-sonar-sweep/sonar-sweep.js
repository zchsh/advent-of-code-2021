function parseDepths(report) {
  return report.split("\n").map((str) => parseInt(str.trim()));
}

function countIncreases(intArray) {
  const len = intArray.length;
  let increasedCount = 0;
  for (let i = 0; i < len; i++) {
    if (i == 0) continue;
    if (intArray[i] > intArray[i - 1]) increasedCount++;
  }
  return increasedCount;
}

function sonarSweep(report) {
  const depths = parseDepths(report);
  return countIncreases(depths);
}

function sonarSweepSliding(report) {
  const depths = parseDepths(report);
  const slidingSums = depths.reduce((acc, depth, idx) => {
    const isFirstOrLast = idx == 0 || idx > depths.length - 2;
    if (isFirstOrLast) return acc;
    const slidingSum = depths[idx - 1] + depth + depths[idx + 1];
    return acc.concat(slidingSum);
  }, []);
  return countIncreases(slidingSums);
}

const defaultExport = {};
defaultExport.sonarSweep = sonarSweep;
defaultExport.sonarSweepSliding = sonarSweepSliding;
module.exports = defaultExport;
