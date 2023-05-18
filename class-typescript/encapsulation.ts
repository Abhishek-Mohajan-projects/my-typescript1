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

class Student extends User {
  private studentId: number;

  constructor(userName: string, age: number, studentId: number) {
    super(userName, age);
    this.studentId = studentId;
  }

  display(): void {
    console.log(
      `username: ${this.userName}, age: ${this.age}, studentid: ${this.studentId}`
    );
  }
  setStudentId(studentId: number): void {
    this.studentId = studentId;
  }
  getStudentId(): number {
    return this.studentId;
  }
}

let student1 = new Student("Abhishek", 21, 223928);
student1.setStudentId(12625352);
console.log(student1.getStudentId());
