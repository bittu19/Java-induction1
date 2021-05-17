
function bmi_calc(weight,height)
{
  var bmi =(weight)/(height*height)
  if(bmi<25)
    {
      console.log("normal")
    }
  else if(bmi>=25 && bmi<=30)
    {
      console.log("overweight")
    }
  else
    {
      console.log("obesce")
    }
}
var weights=[72,76,89,80,67]
var heights=[1.7,1.6,1.5,1.8,1.4]

for(i=0;i<weights.length;i++)
  {
    var w=weights[i]
    var h=heights[i]
    bmi_calc(w,h)
  }
