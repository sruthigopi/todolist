
let button = document.getElementById("lonbtn");
// giving an click event listener to the button
button.addEventListener("click",(e) =>{
    
    let usname= document.getElementById("usname").value; 
    let pwd =document.getElementById("Pwd").value; 

    // calling validate function
    
    validate(usname,pwd,(message)=>{
        alert(message);
       e.preventDefault()
});
});
// creating the validate function

let validate = (usname,pwd,callback)=>{
    
    if(usname == "admin" && pwd == "12345"){
        window.location="todo.html";
        callback("Please Click Ok To View Your ToDo List");
    }
    else{
        
        callback("Incorrect Username Or Password");
       
        
    }
}

