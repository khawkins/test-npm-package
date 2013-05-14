module.exports.sayHelloWithText = function(text) {
    var innerPackage = require("./innerPackage");
    var message = innerPackage.helloMessage(text);
    console.log(message);
};

module.exports.showCurrentFolderContents = function() {
	var shellJs = require('shelljs');
	var filesArray = shellJs.ls();
	console.log('Files in cwd: ' + JSON.stringify(filesArray));
};