const leapYears = function(year) {
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      return true;
    } else {
    return false;
  } 
  }

  if (year % 4 === 0 /*|| year % 400 === 0*/) {
    return true 
  } else {
    return false;
  }
};

console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
