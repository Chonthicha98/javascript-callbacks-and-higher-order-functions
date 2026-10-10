//Exercise #2: At Least Five Function
const studentScoresRoom1 = [90, 40, 67, 80, 100, 15, 86, 12, 99, 67];
const studentScoresRoom2 = [78, 98, 23, 15, 40, 12, 40, 67, 80, 100];
const studentScoresRoom3 = [67, 80, 100, 15, 12, 40, 67, 80, 100, 67];

function checkGradeOver70(score) {
  // Start coding here, auto return true/false
  return score > 70;
}

function atLeastFive(array, operation) {
  // Start coding here
  //1.keep track of pass student start at 0 time first
  let passCount = 0;

  //2.loop through score bypassing checkGradeOver70
  for (let i = 0; i < array.length; i++) {
    //3.if each loop in step 2 is true, add 1 as each count is true into passCount
    if (operation(array[i]) === true) {
      passCount++;
    }
  }
  //4.after check all students, return which room has more than 5 student pass 70 score
  // by return if loop counted true at least 5 times(means 5 students passed condition)
  return passCount >= 5;
}

// Using `atLeastFive` function here
let scoreRoom1Result = atLeastFive(studentScoresRoom1, checkGradeOver70);
let scoreRoom2Result = atLeastFive(studentScoresRoom2, checkGradeOver70);
let scoreRoom3Result = atLeastFive(studentScoresRoom3, checkGradeOver70);

console.log(scoreRoom1Result); //true
console.log(scoreRoom2Result); //false
console.log(scoreRoom3Result); //false

/*
====================================

1. ใน Exercise นี้ ฟังก์ชันใดเป็น Callback Function?
Answer: checkGradeOver70

2. ใน Exercise นี้ ฟังก์ชันใดเป็น Higher Order Function?
Answer: atLeastFive
====================================
*/
