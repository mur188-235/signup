document.write("Muhammad Murtaza")

userSignup = prompt("Welcome to Signup","Type Yes to continue");
userArray = []
if(userSignup){
    userName = prompt ("Enter your userName :");
    userArray.push(userName)
    alert("Your username is added")
}
console.log(userArray)