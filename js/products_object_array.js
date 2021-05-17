var products=[
  {
    name:'nike',
    price:2000,
    quantity:50,
    total:function p(price,quantity)
    {
      return(price*quantity)
    }
  },
  {
    name:'adidas',
    price:1800,
    quantity:59,
    total:function(price,quantity)
    {
      return(price*quantity)
    }
  },
  {
    name:'puma',
    price:1650,
    quantity:78,
    total:function(price,quantity)
    {
      return(price*quantity)
    }
  }
]
var cost=0
for(i=0;i<products.length;i++)
  {
     console.log('product name  '+products[i].name) 
     var x=products[i].price
     var y=products[i].quantity
     var total=products[i].total(x,y)
     cost+=total
     console.log('total price '+total)
  }
console.log('total cost of all the products :'+cost)














