// logic to fill table 
const deletePassword = () => {
  let data = localStorage.getItem("passwords");
  let array = JSON.parse(data);
}

const showPasswords = () => { 
let table = document.querySelector('table');

let data = localStorage.getItem("passwords");

if(data == null){
   table.innerHTML = "No passwords saved";
} else {
  let array = JSON.parse(data);
  let string = "";
  for (let index = 0; index < array.length; index++) {
     let element = array[index];
      string += `
      <tr>
        <td>${element.website}</td>
        <td>${element.username}</td> 
        <td>${element.password}</td>
        <td>${"delete"}</td>
          </tr>`; 
  }
table.innerHTML = table.inerrHTML + string;  
}
}
showPasswords();
let website = document.querySelector('#website');

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
json.push({username:username.value,password:password.value,website:website.value});
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
    } else {
      let table = document.querySelector('table');
      table.innerHTML = `
      <tr>
          <th>Website</th>
          <th>Username</th>
          <th>Password</th>
          <th>Delete</th>
      </tr> `;
       let json = JSON.parse(localStorage.getItem("passwords"));
json.push({username:username.value,password:password.value,website:website.value});;
    alert("password saved");
    localStorage.setItem("passwords", JSON.stringify(json));
    }
    showPasswords();                                  
})