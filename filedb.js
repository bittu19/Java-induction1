/*const process=require('process');
const _ =require('lodash');
const list=require('./books');
console.log("hello"+process.env.TEST);

console.log(_.camelCase('foo Bar'));
console.log(list);
*/
const boo=require('./books');
const fs=require('fs');
const cmd=require('yargs').argv;

//fs.writeFileSync('data.txt','Hello there');
/*fs.writeFile('data2.txt','hello async file',(error)=>
{
    if(!error)
    {
        console.log('file successfully');
    }
})*/
/*fs.readFile('data2.txt',(err,data)=>
{
    if(!err)
    {
        console.log(data);
    }
})*/
console.log(boo.list);
let books=[];
console.log(cmd);
if(cmd._[0] === 'add')
{
  //  console.log('Adding Book');
   // console.log(cmd.title);
   // console.log(cmd.category)
    
    fs.readFile('data3.json',(err,data)=>
    {
       const books=JSON.parse(data.toString());
       books.push({title:cmd.title,category:cmd.category});
       
    
    const jsonstr=JSON.stringify(books);
    fs.writeFile('data3.json',jsonstr,(error)=>
{
    if(!error)
    {
        console.log('file successfully');
    }
})
    })
}else if(cmd._[0]=='delete')
{
    fs.readFile('data3.json',(err,data)=>
    {
        const books=JSON.parse(data.toString())
      const book  =  books.filter((b)=> b.title != cmd.title);
      
      const jsonstr=JSON.stringify(book);
    //  console.log(jsonstr);
      fs.writeFile('data3.json',jsonstr,(error)=>
      {
          if(!error)
          {
              console.log('file successfully')
          }
      })

    })
}

else{
    console.log('invalid');
}
