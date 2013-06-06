var createObjectWithNamedProperties = function(innerIndex) {
	var obj = {};
	obj.innerIndex = innerIndex;
	obj.incrFunc = function() {
		obj.innerIndex++;
		return obj.innerIndex;
	}

	return obj;
};

var createObjectWithUnnamedProperties = function (innerIndex) {
	var obj = { 'innerIndex': innerIndex };

	obj.incrFunc = function() {
		this.innerIndex++;
		return this.innerIndex;
	};

	return obj;
};

module.exports.testTwoInstancesNamedPropertiesObj = function() {
	var obj1 = createObjectWithNamedProperties(4);
	var obj2 = createObjectWithNamedProperties(7);
	var obj = { 'someOtherProperty': 22 };
	console.log('obj1.innerIndex: ' + obj1.innerIndex + ', obj1.incrFunc(): ' + obj1.incrFunc());
	console.log('obj2.innerIndex: ' + obj2.innerIndex + ', obj2.incrFunc(): ' + obj2.incrFunc());
};

module.exports.testTwoInstancesUnnamedPropertiesObj = function() {
	var obj1 = createObjectWithUnnamedProperties(4);
	var obj2 = createObjectWithUnnamedProperties(7);
	var obj = { 'someOtherProperty': 22 };
	console.log('obj1.innerIndex: ' + obj1.innerIndex + ', obj1.incrFunc(): ' + obj1.incrFunc());
	console.log('obj2.innerIndex: ' + obj2.innerIndex + ', obj2.incrFunc(): ' + obj2.incrFunc());
};
