

function addPromise(a,b)
{
    return new Promise((resolve,reject)=>
    {
        const d=a+b;
        if(d>100)
        {
            reject("nothing works");
        }
        else{

            resolve(d);
            
        }
    }
    )}
 function subPromise(a,b)
{
    return new Promise((resolve,reject)=>
    {
        const d=a-b;
        if(d>100)
        {
            reject("nothing works");
        }
        else{
            resolve(d);
        }
    }
    )}

/*
addPromise(2,3).then((data)=>{
console.log(data)
 subPromise(data,20).then((sresult)=>
 {
     console.log(sresult);
 }).catch((error)=>
 {
     console.log(error);
 })
}).catch(

(err)=>{console.log(err)});

*/

//async and await

const calculate = async ()=>
{
    try{
    const sum = await addPromise(20,30);

    const net= await subPromise(sum ,40);
    console.log("net: "+net);
    }
    catch(e){
        console.log(e);

    }
}
  calculate();
