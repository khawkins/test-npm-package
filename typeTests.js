module.exports.logVariousTypes = function() {
	var i = 1, fl = 2.2, obj = { 'one': true }, ary = [ 1, 2, 3 ], f = function () { console.log('Hello world!'); };

	[ i, fl, obj, ary, f ].forEach(function(typeVar) {
		console.log(typeVar + ': ' + (typeof typeVar));
	});
};