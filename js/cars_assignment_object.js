var cars=[
  {
    name:'ferrari italian 850',
    distance:2000,
    petrol:150,
    milege:function()
    {
      return this.distance/this.petrol
    }
  },
  {
    name:'porsche',
    distance:1800,
    petrol:159,
     milege:function()
    {
      return this.distance/this.petrol
    }
  }
]
var cost=0
for(i=0;i<cars.length;i++)
  {
     var product=cars[i]
     
     var total=product.milege()
     console.log('milege of :'+product.name+' ->'+total)
     if(total<12)
       {
         console.log('low milege')
       }
  }















