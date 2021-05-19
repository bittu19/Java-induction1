import React from 'react';

const product = (props)=>
{
    
    const onHeadclick=()=>
    {
         console.log("clicked");
    }
     const ui = {color:'green',backgroundColor:'#afa'}
     ui.color="yellow";
    return(
        <div style={{color:'red'}}>
        <h1 style={ui}>(props.name)</h1> 
        <h2>(props.price)</h2>
        <h3>(props.qty)</h3>
        <button onClick={onHeadclick}>Select</button>
        
        </div>
             
    );
}
export default product;