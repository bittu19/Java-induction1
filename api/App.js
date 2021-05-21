const MongoClient = require('mongodb').MongoClient;
const url='mongodb://localhost:27017';
const client= new MongoClient(url,{useUnifiedTopology:true});

client.connect(function(err)
{
    if(err)
    {
        console.error(err);
    }
    else{
        console.log("connected to the server");
        const db= client.db('itcdb');
        const books=db.collection('books');
        books.insertOne({title:'Rich dad'}).then((data)=>
        {
            console.log(data);
        })
    }
});
module.exports=client;
