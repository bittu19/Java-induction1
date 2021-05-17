function calc(student_scores)
{
for(i=0;i<student_scores.length;i++)
  {
    var total=0
    console.log('avg marks of student ' +(i+1))
    for( j=0;j<student_scores[i].length;j++)
      {
        total+=student_scores[i][j]
      }
    var avg=total/student_scores[i].length
    console.log(avg)
    
    }
  }
    
var student_scores =[[78,84,69],
                    [65,81,45],[66,96,45]];
calc(student_scores)
