var xhr =  new XMLHttpRequest();

xhr.open('GET','https://jsonplaceholder.typicode.com/users',true);


xhr.onload = function()
{
  var users=JSON.parse(xhr.respone);
  users.forEach(function(todo)
     {      
           console.log(todo.name)
  });
};

xhr.send(null);
