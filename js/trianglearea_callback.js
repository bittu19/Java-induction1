function area(a,b,z)
{
  var r=0.5*a*b
  z(r)
}
function result(r)
{
  console.log("area of triangle : "+r)
}
area(2,3,result)
