// 1. findMatching
function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}

// 2. fuzzyMatch
function fuzzyMatch(drivers, letters) {
  return drivers.filter(driver => driver.startsWith(letters));
}

// 3. matchName
function matchName(drivers, name) {
  return drivers.filter(driver => driver.name === name);
}
