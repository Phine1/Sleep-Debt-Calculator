const getSleepHours = day => {
 if (day==="Monday") {
   return 7;
 } else if(day==="Tuesday") {
   return 6;
 } else if(day==="Wednesday") {
   return 5;
 } else if(day==="Thursday") {
   return 5;
 } else if(day==="Friday") {
   return 8;
 } else if(day==="Saturday") {
   return 5;
 } else if(day==="Sunday") {
   return 6;
 }
}

const getActualSleepHours = () => {
  return getSleepHours("Monday")+getSleepHours("Tuesday")+getSleepHours("Wednesday")+getSleepHours("Thursday")+getSleepHours("Friday")+getSleepHours("Saturday")+getSleepHours("Sunday");
  };


  const getIdealSleepHours = (sleepHours) => {
    return sleepHours*7;
  }
  
const calculateSleepDebt = () => {
 let actualSleepHours = getActualSleepHours();
 let idealSleepHours = getIdealSleepHours(10);
if (actualSleepHours===idealSleepHours) {
  console.log('Hey there! You got the perfect amount of sleep')
} else if (actualSleepHours > idealSleepHours) {
  console.log('You have overslept ' + (actualSleepHours-idealSleepHours) + ' hours.'+ ' See You! you got more sleep than deserved')
} else if(actualSleepHours < idealSleepHours) {
  console.log('You got ' +  (idealSleepHours-actualSleepHours)+' hours of sleep defeceit.' + ' Hey! You probably need more sleep')
}
}

console.log(calculateSleepDebt());