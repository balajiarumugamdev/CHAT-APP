
let main = {};

fetch("http://localhost:3000/user")
.then((response) => response.json())
.then((data) =>{
    console.log(data)
    main = data;
})


function verify(){
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

    for(i=0; i < main.length; i++){
        if( username == main[i].username && password == main[i].password){
            location.replace("./chat.html")
            alert( `Login successfull for User ${username} !!!`)
            return
        }
    }
    alert("Incorrect Username/Password")
    document.getElementById("username").value=''
    document.getElementById("password").value=''
}




















