let username = document.getElementById('username');

let password = document.getElementById('password');

let button = document.querySelector(".btn");
button.addEventListener("click", (event) => {
  event.preventDefault()
  event.stopPropagation()
  console.log("clcik")
  console.log(username.value, password.value)
  let passwords = localStorage.getItem("passwords");
    if (passwords == null) {
       let json = []
json.push({username:username.value,password:password.value});
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
    } else {
       let json = JSON.parse(localStorage.getItem("passwords"));
json.push({username:username.value,password:password.value});
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
    }
                                       
})