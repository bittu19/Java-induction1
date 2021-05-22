/*  import React ,{useState} from 'react';
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
export default Book;*/
import {useState,useEffect} from 'react';
import Books from './Books';
import axios from 'axios';

const Book = ()=>
{
  const  [books,setBook]=useState([{ id:2,title:'xyz'},
  {id:1,title:'abc'}])
 
const [title,setTitle]=useState('')
const [refresh,setRefresh] = useState(true)

const[form,setForm]=useState({comment:'',category:''})
const fetchBooks = () => {
    axios.get('http://localhost:5000/books').then((res)=>{
        setBook(res.data)
    })
}
/*const deleteBooks=()=>
{
    axios.get('http://localhost:5000/books').then((res)=>
    {
            setBook(res.data)
    })
}*/
useEffect(fetchBooks,[])
useEffect(fetchBooks,[refresh])
/*useEffect(deleteBooks,[])
useEffect(deleteBooks,[refresh])*/
//<button onClick={addBookHandler}>Add</button>
const addBookHandler = () => {
    // const booksCopy = [...books, {id:Math.round(Math.random()*100), title:title}];
    // setBooks(booksCopy);
    axios.post('http://localhost:5000/books', {title}).then((res)=>{
        setRefresh(!refresh)
    })
}

const removeBookHandler=(id)=>
{
    console.log("removing"+id);
    axios.delete('http://localhost:5000/books/'+id).then((res)=>
    {
        setRefresh(!refresh)
    })
  //  const bookscopy=[...books];
  //  const filtered=bookscopy.filter(book=>book.id !== id)
  //  setBook(filtered);
}
const editBookHandler=(id,title)=>
{
    console.log(id);
    axios.put('http://localhost:5000/books/'+id,{title}).then((res)=>
    {
        setRefresh(!refresh)
    })
   // const bookscopy=[...books];
   // const altered= bookscopy.map((b)=>
    //{
      //  return id === b.id ? {...b,title:title}:b;
    //})
   // setBook(altered);
}
    return(
        <div>
        
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
          {/*  <p><textarea onChange={(e)=>setForm({...form,Comment:e.target.value})}></textarea></p>
            <p><select name="category" onChange={(e)=>setForm({...form, category:e.target.value})}>
            <option>Novel</option>
            <option>Comic</option>
            <option>Fiction</option>
            </select></p>
            <p>{form.comment}</p>
    */ }
            <button onClick={addBookHandler}>ADD </button>
          {
            books.map((book)=>
            {
                return <Books key={book.id} title={book.title}_id={book._id} onRemove={()=>{removeBookHandler(book._id)}} onEdit={editBookHandler}><h2>Book</h2></Books>
            })
         
        }
        </div>

    )
}
export default Book;
