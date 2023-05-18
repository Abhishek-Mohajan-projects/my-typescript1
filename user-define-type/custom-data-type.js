var users;
users = [];
var user1;
user1 = { userName: "Alex", userId: 101 };
users.push(user1);
var user2;
user2 = { userName: "Peter", userId: 102 };
users.push(user2);
console.log(users);
var RequestType = "POST";
var postRequest = RequestType;
postRequest = "POST";
function requestHandler(RequestType) {
    console.log(RequestType);
}
requestHandler("POST");
