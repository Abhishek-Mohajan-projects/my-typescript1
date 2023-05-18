/* import * as student from "./Student";
function displayInfo(): void {
  console.log(`${student.studentName}, ${student.studentAge}`);
}
displayInfo(); */

import { User } from "./UserClass";

let user = new User("Abhishek", 21);
user.display();
