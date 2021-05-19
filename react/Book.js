import React ,{useState} from 'react';
import Books from './Books';
const Book=()=>
{
  const  [books,setBook]=useState([{id:1,title:'abc'},
{id:2,title:'xyz'}])
 
const [title,setTitle]=useState('')
const removeBookHandler=(id)=>
{
    console.log("removing"+id);
    const bookscopy=[...books];
    const filtered=bookscopy.filter(book=>book.id !== id)
    setBook(filtered);
}
    return(
        <div>
        
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>

            <button onClick={()=>{
     const bookscopy=[...books, {id:Math.round(Math.random()*10),title:title}];setBook(bookscopy);}}>ADD </button>
     {
            books.map((book)=>
            {
                return <Books key={book.id} title={book.title} onRemove={()=>{removeBookHandler(book.id)}} ></Books>
            })
        
        }
        </div>

    )
}
export default Book;
