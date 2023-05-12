/*
Your task in order to complete this Kata is to write a function which formats a duration,
 given as a number of seconds, in a human-friendly way.

The function must accept a non-negative integer. If it is zero, it just returns "now".
 Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.

It is much easier to understand with an example:

* For seconds = 62, your function should return 
    "1 minute and 2 seconds"
* For seconds = 3662, your function should return
    "1 hour, 1 minute and 2 seconds"
For the purpose of this Kata, a year is 365 days and a day is 24 hours.

Note that spaces are important.

Detailed rules
The resulting expression is made of components like 4 seconds, 1 year, etc. In general,
 a positive integer and one of the valid units of time, separated by a space. 
 The unit of time is used in plural if the integer is greater than 1.

The components are separated by a comma and a space (", "). Except the last component,
 which is separated by " and ", just like it would be written in English.

A more significant units of time will occur before than a least significant one.
 Therefore, 1 second and 1 year is not correct, but 1 year and 1 second is.

Different components have different unit of times. So there is not repeated units like in 5 seconds and 1 second.

A component will not appear at all if its value happens to be zero. Hence,
 1 minute and 0 seconds is not valid, but it should be just 1 minute.

A unit of time must be used "as much as possible". It means that the function should not return 61 seconds,
 but 1 minute and 1 second instead. Formally, the duration specified by of a component must not be greater than any valid more significant unit of time.




*/


function formatDuration (seconds) {
    // Complete this function
    if(seconds == 0)return "now";
    const oneMinute = 60;
    const oneHour = oneMinute * 60;
    const oneDay = oneHour * 24;
    const oneYear = 31536000;
    //operations
    const year = (Math.floor(seconds / oneYear));
    const day = (Math.floor(seconds / oneDay) % 365);
    const hour = (Math.floor(seconds / oneHour) % 60)
    const minute = (Math.floor(seconds / oneMinute) % 60)
    const second = (seconds % 60)

    const plural = (num) => num === 1 ? '' : 's';
    const YY = year ? year + ' year' + plural(year) : null;
    const DD = day ? day + ' day' + plural(day) : null;
    const HH = hour ? hour + ' hour' + plural(hour) : null;
    const MM = minute ? minute + ' minute' + plural(minute) : null;
    const SS = second ? second + ' second' + plural(second) : null;

const checkNulls = [YY,DD,HH,MM,SS].filter(Boolean);
const lastValue = checkNulls.pop();
return checkNulls.length === 0 
? lastValue
: checkNulls.join(', ') + ' and ' + lastValue;

  }
  console.log(formatDuration(31557600000))





// solution from internet
function formatDuration2 (seconds) {
let time = { year: 31536000, day: 86400, hour: 3600, minute: 60, second: 1 },
      res = [];

  if (seconds === 0) return 'now';
  
  for (let key in time) {
    if (seconds >= time[key]) {
      let val = Math.floor(seconds/time[key]);
      res.push(val += val > 1 ? ' ' + key + 's' : ' ' + key);
      seconds = seconds % time[key];
    }
  }
 
  return res.length > 1 ? res.join(', ').replace(/,([^,]*)$/,' and'+'$1') : res[0]

}



  /*

let formatYear = "";
    let formatDay = "";
    let formatHour = "";
    let formatMinute = "";
    let formatSecond = "";
    //year
    (year == 0) 
    ? formatYear = ""  
    : (year >= 2) 
    ? formatYear = year + " years, "
    : formatYear = year + " year, ";
    //day
    (day == 0) 
    ? formatDay = ""  
    : (day >= 2) 
    ? formatDay = day + " days, "
    : formatDay = day + " day, ";
    //hour
    (hour == 0) 
    ? formatHour = ""  
    : (hour >= 2) 
    ? formatHour = hour + " hours, "
    : formatHour = hour + " hour, ";
    //minute
    (minute == 0) 
    ? formatMinute = ""  
    : (minute >= 2) 
    ? formatMinute = minute + " minutes "
    : formatMinute = minute + " minute ";
    //seconds
    (second == 0) 
    ? formatSecond = ""
    : (formatYear == "" && formatDay== "" && formatHour == "" && formatMinute == "")
    ? formatSecond = second + " second"
    : (second >= 2) 
    ? formatSecond = "and " + second + " seconds"
    : formatSecond = "and " + second + " second";
    
    let finalMessage = formatYear+formatDay+formatHour+formatMinute+formatSecond
    return finalMessage.trim()




  */