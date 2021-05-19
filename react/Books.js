import React,{useState} from 'react';

const Books=(props)=>
{
   const [showEdit,setShowEdit]=useState(false)
   const[title,setTitle]=useState('')
    return(
        <div>
        <h3>{props.title}</h3>
        {showEdit &&<input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>}
        <button onClick={props.onRemove}>Remove</button>
        <button onClick={()=> {
            setShowEdit(true);
            setTitle(props.book.title)
         }
        } >EDIT</button>
        </div>
    );

}
export default Books;