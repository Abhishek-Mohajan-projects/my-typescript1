// numeric enum

enum RequestTypes {
  readNumber,
  saveNumber,
  updateNumber,
  deletNumber,
}

// console.log(RequestTypes);

// string enum
enum RequestTypes2 {
  readData = "READ_DATA",
  saveData = "SAVE_DATA",
  updateData = "UPDATE_DATA",
  deleteData = "DELETE_DATA",
}

// console.log(RequestTypes2);

// hetergenous enum

enum RequestTypes3 {
  readData = "READ_DATA",
  saveData = "SAVE_DATA",
  id = 101,
}

console.log(RequestTypes3);
