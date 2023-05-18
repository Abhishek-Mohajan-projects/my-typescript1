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
let user2 = new User("Mohajan", 22);
user.display();
user2.display();
