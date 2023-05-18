"use strict";
/* import * as student from "./Student";
function displayInfo(): void {
  console.log(`${student.studentName}, ${student.studentAge}`);
}
displayInfo(); */
Object.defineProperty(exports, "__esModule", { value: true });
var UserClass_1 = require("./UserClass");
var user = new UserClass_1.User("Abhishek", 21);
user.display();
