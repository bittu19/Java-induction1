const cmd = require('yargs').argv
const books = require('./books')
const fs= require('fs');
const client=require('./db');

//node index.js add --title Nodel --category TEst
if(cmd._[0] === 'add'){
    // console.log('Adding Book')
    // console.log(cmd.title)
    // console.log(cmd.category)
    const id= Math.round(Math.random()*1000);
    

    books.add({title:cmd.title,category:cmd.category,id:id});
    //const res= books.add({title:cmd.title,category:cmd.category,id:id});
} //node index.js add --id 1
else if(cmd._[0] === 'delete') { //check for delete
//read items from fil
const id=cmd.id;
books.remove(id);
/*fs.readFile('',(err,data)=>
{

  //  const boo =JSON.parse(data.toString());
 /*   const filtered =data.filter((b)=>b.id !==cmd.id);
    const jsonstr=JSON.stringify(filtered);

    fs.writeFile('localhost:27017/itcdb',jsonstr,(err)=>
    {
        if(!err)
        {
            console.log("successfully deleted");
        }
    })
*/


//})
//filter out objects not matching the title
//overwrite the filtered array into file
}
else if(cmd._[0] === 'list' )
{
 books.list(); 
}
else if(cmd._[0] === 'filter'){
    const title=cmd.title;
    books.filter(title);

}
else if(cmd._[0] === 'edit'){
    const title=cmd.title;
    const id=cmd.id;
    const category=cmd.category;
    books.update({title,category,id })

}
else 
    console.log('invalid command')