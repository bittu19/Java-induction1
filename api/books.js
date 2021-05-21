const { ObjectId } = require('bson');
const { reject } = require('lodash');
const client = require('./db')

const db = client.db('itcdb');
const collection = db.collection('books');

const add =  (book) => {

    
    return new Promise (async (resolve,reject)=>
    {
        try
        {
            const res=await collection.insertOne(book)
            if(res.result.ok == 1)
            {
                resolve({status:'success'})
            }
        }catch(error)
        {
            reject({status:'failure'})
        }
    })
    
}

const remove = async (id) => {
    try{
    await collection.deleteOne({id:{$eq:id}});
    }
    catch(e)
    {
        console.log(e);
    }
    client.close();
    
}


const list = async () => {
    console.log("enter the list")
   const l= await collection.find({}).toArray();
    console.log(l);
    client.close();
}
const filter = (book)=>
{
   return  new Promise(async (resolve,reject)=>
   {
       try{
       const data = await collection.find(book).toArray();
       resolve(data);
       }catch(e)
       {
           reject({status:'failure',reason:e});
       }
   })
   
  
}
const update = (book)=>
{
  /**  console.log("enter the edit");
   await collection.updateOne({id:{$eq:book.id}}, 
        {
            $set:
            {
                title:book.title,
                category:book.category
            }
        })
        client.close();  
        */
      return  collection.updateOne({_id:ObjectId(book._id)}, 
            {
                $set:
                {
                    title:book.title,
                    category:book.category
                }
            })
}
const removeById = (id)=>
{
    return collection.deleteOne({_id: ObjectId(id)})
}
const filterById =(id)=>
{
    return new Promise(async (resolve,reject)=>
    {
        try
        {
            const data = await collection.findOne({_id:ObjectId(id)})
            resolve(data);
        }catch(e)
        {
            reject({status:'failure',reason:e});
        }
    })
}
module.exports = {add,remove,list,filter,update,delete:removeById,search:filterById}