//Timers

//iterative

function timerIterative(seconds) {
  //code here
  //loop through seconds and print 1-60
  for (i = seconds; i >= 0; i--) {
    console.log(i);
  }
}

console.log('Iterative Timer');
console.log(timerIterative(60));

//Recursive
function recursiveTimer(seconds) {
  if (seconds <= 0) {
    return;
  } else {
    console.log(seconds);
    recursiveTimer(seconds - 1);
  }
}

// console.log('Recursive Timer');
// recursiveTimer(60);

//create a recursive counter from 0 to seconds
//stop when i == seconds, i > seconds

//NOTE:
//TIMER: number - 0
//COUNTER: 0 - number

function TimerRecursive(i, seconds) {
  //if counter is greater than five, just stop
  if (i > 60) {
    return `Done`;
  } else {
    //increment counter
    i++;
    //print the counter and the second
    console.log(i, seconds);
    return TimerRecursive(i, seconds - 1);
  }
}

console.log('Recursive Timer');
console.log(TimerRecursive(0, 60));
