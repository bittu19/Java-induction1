const express =require('express');
const cors =require('cors');
//const bodyparser=require('body-parser');
const books = require('./books');
const app = express();
app.use(cors());
app.use(express.json());

app.get('/',function(req,res)
{
    res.send("hello world");
})


app.get('/books',(req,res)=>
{
    books.filter({}).then((data)=>
    {
        res.send(data);
    })
})
app.post('/books',(req,res)=>
{
    console.log(req.body);
    try{
        books.add(req.body).then((data)=>
        {
            res.status(200).send(data);
        })
    }catch(e)
    {
        res.send(err);
    }

})
app.delete('/books/:id',(req,res)=>
{
    console.log(req.params.id);
    books.delete(req.params.id).then((data)=>
    {
        res.send({status:'success'});
    }).catch((err)=>
    {
        res.send({status:'failure'});
    })

})
app.get('/books/:id',(req,res)=>
{
    console.log(req.params.id);
    books.search(req.params.id).then((data)=>
    {
        res.status(200).send(data);
    }).catch((e)=>
    {
         res.send({status:'failure'});
    })

})
app.put('/books/:id',(req,res)=>
{
 console.log(req.params.id);
 console.log(req.body);
 books.update({...req.body,_id:req.params.id}).then((data)=>
 {
     res.status(200).send(data);
 }).catch((e)=>
 {
     res.send({status:'failure'});
 })
})

app.listen(5000,()=>
{
    console.log('server is connected');
})