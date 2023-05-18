var userId = 101;
var firstName = "Abhishek";
var lastName = "Mohajan";
var isActivated = true;
var fullName = firstName.concat(lastName);
console.log("Userid: ".concat(userId, ", Fullname : ").concat(fullName.split(" "), ", isActive : ").concat(isActivated));
function display() {
    console.log("this is display");
}
display();
