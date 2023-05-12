/*

Write a function, which takes a non-negative integer 
(seconds) as input and returns the time in a 
human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.

*/


function humanReadable (seconds) {
    if(seconds > 359999)return 'Time excedes';
    let HH = 0;
    let MM = 0;
    let SS = 0;

    for(let i = 0; i < seconds; i++){
        SS += 1;
        if(SS == 60){
            SS = 0;
            MM += 1
        } 
        if(MM == 60){
            MM = 0;
            HH += 1;
        }
    }
    if(SS < 10)SS = '0'+SS
    if(MM < 10)MM = '0'+MM
    if(HH < 10)HH = '0'+HH
    return HH+':'+MM+':'+SS;
  }

  console.log(humanReadable(3600))


  function humanReadable2(seconds) {
    const oneMinute = 60
    const oneHour = oneMinute * 60
    const H = ('0' + Math.floor(seconds / oneHour)).slice(-2)
    const M = ('0' + Math.floor(seconds / oneMinute) % 60).slice(-2)
    const S = ('0' + seconds % 60).slice(-2)
    return `${H}:${M}:${S}`
  }
  console.log(humanReadable2(3600))
