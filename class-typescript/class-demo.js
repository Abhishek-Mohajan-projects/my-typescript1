var User = /** @class */ (function () {
    function User(userName, age) {
        this.userName = userName;
        this.age = age;
    }
    User.prototype.dispaly = function () {
        console.log("username: ".concat(this.userName, ", age: ").concat(this.age));
    };
    return User;
}());
var user = new User("Abhishek", 21);
var user2 = new User("Mohajan", 22);
user.dispaly();
user2.dispaly();
