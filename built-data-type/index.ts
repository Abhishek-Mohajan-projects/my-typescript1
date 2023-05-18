let userId: number = 101;
let firstName: string = "Abhishek";
let lastName: string = "Mohajan";
let isActivated: boolean = true;

let fullName = firstName.concat(lastName);

console.log(
  `Userid: ${userId}, Fullname : ${fullName.split(
    " "
  )}, isActive : ${isActivated}`
);

function display(): void {
  console.log("this is display");
}

display();
