var products=[
  {
    name:'nike',
    price:2000,
    quantity:50,
    total:function()
    {
      return this.price*this.quantity
    }
  },
  {
    name:'adidas',
    price:1800,
    quantity:59,
     total:function()
    {
      return this.price*this.quantity
    }
  },
  {
    name:'puma',
    price:1650,
    quantity:78,
    total:function()
    {
      return this.price*this.quantity
    }
  }
]
var cost=0
for(i=0;i<products.length;i++)
  {
     console.log('product name  '+products[i].name) 
     var product=products[i]
     
     var total=product.total()
     cost+=total
     console.log('total price '+total)
  }
console.log('total cost of all the products :'+cost)














