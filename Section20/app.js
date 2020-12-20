// capitalizes first character to uppercase and the remainder to lowercase. 
function capitalize(str){
    let first = str.slice(0,1).toUpperCase();
    let remainder = str.slice(1,str.length).toLowerCase();
    return `${first + remainder}`;
}

// Returns the sum of an array
function sumArray(arr){
    let sum = 0;
    for( var number of arr){
        sum += number;
    }
    return sum;
}

// Returns day of week
const days = {
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
    6: "Saturday",
    7: "Sunday",
  };
function returnDay(dayNum) {
    if (dayNum > 0 && dayNum < 8) {
      return days[dayNum];
    }
    return null;
  }