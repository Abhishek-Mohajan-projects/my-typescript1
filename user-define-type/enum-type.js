// numeric enum
var RequestTypes;
(function (RequestTypes) {
    RequestTypes[RequestTypes["readNumber"] = 0] = "readNumber";
    RequestTypes[RequestTypes["saveNumber"] = 1] = "saveNumber";
    RequestTypes[RequestTypes["updateNumber"] = 2] = "updateNumber";
    RequestTypes[RequestTypes["deletNumber"] = 3] = "deletNumber";
})(RequestTypes || (RequestTypes = {}));
// console.log(RequestTypes);
// string enum
var RequestTypes2;
(function (RequestTypes2) {
    RequestTypes2["readData"] = "READ_DATA";
    RequestTypes2["saveData"] = "SAVE_DATA";
    RequestTypes2["updateData"] = "UPDATE_DATA";
    RequestTypes2["deleteData"] = "DELETE_DATA";
})(RequestTypes2 || (RequestTypes2 = {}));
// console.log(RequestTypes2);
// hetergenous enum
var RequestTypes3;
(function (RequestTypes3) {
    RequestTypes3["readData"] = "READ_DATA";
    RequestTypes3["saveData"] = "SAVE_DATA";
    RequestTypes3[RequestTypes3["id"] = 101] = "id";
})(RequestTypes3 || (RequestTypes3 = {}));
console.log(RequestTypes3);
