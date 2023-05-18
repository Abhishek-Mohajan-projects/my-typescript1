type User = { userName: string; userId: number };

let users: User[];

users = [];

let user1: User;
user1 = { userName: "Alex", userId: 101 };
users.push(user1);

let user2: User;
user2 = { userName: "Peter", userId: 102 };
users.push(user2);

console.log(users);

let RequestType = "POST";
let postRequest = RequestType;
postRequest = "POST";

function requestHandler(RequestType) {
  console.log(RequestType);
}
requestHandler("POST");
