#!/usr/bin/env node

var path = require('path');
var jsObjectsTests = require('./jsObjectsTests');
var readlineTests = require('./readlineTests');
var typeTests = require('./typeTests');

var funcMap = {
	'myTestPackageExec': myTestPackageExec,
	'testJsObjects': testJsObjects,
	'testReadline': testReadline,
	'logVariousTypes': logVariousTypes
};

// --- Begin Setup ---
if (!process.argv[2]) {
	usage();
	process.exit(1);
}

var funcName = process.argv[2];
var func = funcMap[funcName];
if (!func) {
	console.log('Unknown function name \'' + funcName + '\'.  Did you update funcMap?');
	usage();
	process.exit(2);
}
// --- End Setup ---

func();

function usage() {
	console.log('Usage:');
	console.log(path.basename(process.argv[1]) + ' <name of function to execute>');
}

function myTestPackageExec() {
	var testPackage = require('./myTestPackage');
	testPackage.sayHelloWithText("Where'd the cheese go?  I don't know!");
	testPackage.showCurrentFolderContents();
}

function testJsObjects() {
	jsObjectsTests.testTwoInstancesNamedPropertiesObj();
	jsObjectsTests.testTwoInstancesUnnamedPropertiesObj();
}

function testReadline() {
	readlineTests.readlineAlternateBuffers();
}

function logVariousTypes() {
	typeTests.logVariousTypes();
}
