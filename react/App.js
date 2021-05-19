//import logo from './logo.svg';
import './App.css';
//import product from './product';
//import user from './user';
import Book from './Book';

function App() {
  //const users=[{name:'john',profession:'developer'}]

   /* const products=[{name:'nike',price:2000, qty:1},
    {name:'nike',price:2000, qty:1}]*/
  return (

    <div className="App">
    {
     /* users.map((user)=>{
        return <user name={user.name} profession={user.profession}/>
      })*/
    /*  products.map((products1)=>
      {
           return<product name={products1.name} price={products1.price} qty={products1.qty}/>
           
      })*/
      <Book/>
    }
    
  
    </div>
  );
}

export default App;
