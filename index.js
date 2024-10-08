// Code your solution here
// 1. Function to find matching driver names (case insensitive)
function findMatching(drivers, name) {
    return drivers.filter(driver => 
      driver.toLowerCase() === name.toLowerCase()
    );
  }
  
  // 2. Function to return drivers whose names begin with the provided string
  function fuzzyMatch(drivers, query) {
    return drivers.filter(driver => 
      driver.toLowerCase().startsWith(query.toLowerCase())
    );
  }
  
  // 3. Function to match driver objects where name matches a given string
  function matchName(drivers, name) {
    return drivers.filter(driver => 
      driver.name === name
    );
  }
  