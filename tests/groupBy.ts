import * as R from 'ramda';

let byGrade = R.groupBy(function(student: {score: number; name: string}) {
    let score = student.score;
    return score < 65 ? 'F' :
    score < 70 ? 'D' :
    score < 80 ? 'C' :
    score < 90 ? 'B' : 'A';
});
let students = [{name: 'Abby', score: 84},
  {name: 'Eddy', score: 58},
  {name: 'Jack', score: 69}];
// @dts-jest:skip Dictionary<Object[]>
byGrade(students);
