class User {
  userName: string;
  age: number;

  constructor(userName: string, age: number) {
    this.userName = userName;
    this.age = age;
  }

  display(): void {
    console.log(`username: ${this.userName}, age: ${this.age}`);
  }
}
let user = new User("Abhishek", 21);
user.display();

class Student extends User {
  studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `username: ${this.userName}, age: ${this.age}, studentid: ${this.studentId}`
    );
  }
}

let user1 = new Student("abhishek", 21, 1200090);
user1.display();
