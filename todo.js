// display to do task in the page

let showtodo=(task)=>{

    // append task in  todo list
    var todolist =document.getElementById("todo");
    todolist.innerHTML="<thead><tr><th>TITLE</th><th>STATUS</th></tr></thead>";
    for(let i=0;i<task.length;i++){
          
      if(task[i].completed==true){
      
        todolist.innerHTML += "<tr><td>"+ task[i].title +"</td><td><input type=checkbox checked disabled></td></tr>";
      }
      else{
        todolist.innerHTML += "<tr><td>"+ task[i].title +"</td><td><input name=check onclick=checktodo() type=checkbox></td></tr>";
      }
    }
    
  }

// get todo list elements from the API

  let gettodo=()=>{

var request = new XMLHttpRequest();

// set the callback
request.onreadystatechange =function(){
if(request.readyState==4 && request.status == 200){
  // string data
  console.log("response"+this.responseText);
  
  // parse the response to make object
  var todolist =JSON.parse(this.responseText);
  // update the page
  showtodo(todolist);
}
};
// prepare the request
request.open("GET","https://jsonplaceholder.typicode.com/todos",true);
// make the requesst
request.send();
}

// checking 5 tasks 
let checktodo=()=>{
  let count=0;
 let check = document.getElementsByName("check");
  
  let pro= new Promise(function(resolve,reject){
for(let i=0;i<check.length;i++){
   if(check[i].checked==true){
    count+=1;
    console.log(count);
   }
   
}
if(count==5){
  resolve("Congrats! 5 Tasks Have Been Successfully Completed!");
  // location.reload();
  
  }
  
});
pro.then(function(message){
  alert(message);
})
}