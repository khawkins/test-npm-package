module.exports.sayHelloWithText = function(text) {
    var innerPackage = require("./innerPackage");
    var message = innerPackage.helloMessage(text);
    console.log(message);
};
