let userId: string | number | boolean;
userId = 101;
userId = "10";
console.log(userId);

function displayUserInfo(userId: string | number | boolean) {
  console.log(userId);
}

displayUserInfo(20);
