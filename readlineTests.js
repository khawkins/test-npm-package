var Stream = require('stream');
var readline = require('readline');

var createReadStream = function() {
	var readStream = new Stream;
	readStream.readable = true;

	// Events

	readStream.on('readable', function() {
		console.log('readStream readable event fired');
	});
	readStream.on('end', function() {
		console.log('readStream end event fired');
	});
	readStream.on('error', function() {
		console.log('readStream error event fired');
	});
	readStream.on('close', function() {
		console.log('readStream close event fired');
	});

	readStream.pause = function() {
		console.log('input stream pausing.');
	};
	readStream.resume = function() {
		console.log('input stream resuming.');
	};

	return readStream;
};

var createWriteStream = function(callback) {
	var writeStream = new Stream;
	writeStream.writable = true;
	writeStream.streamContent = '';

	// Events

	writeStream.on('drain', function() {
		console.log('writeStream drain event fired');
	});
	writeStream.on('error', function() {
		console.log('writeStream error event fired');
	});
	writeStream.on('close', function() {
		console.log('writeStream close event fired');
	});
	writeStream.on('finish', function() {
		console.log('writeStream finish event fired');
	});
	writeStream.on('pipe', function() {
		console.log('writeStream pipe event fired');
	});
	writeStream.on('unpipe', function() {
		console.log('writeStream unpipe event fired');
	});

	writeStream.write = function (buf) {
		console.log('writeStream.write: \'' + buf + '\'');
		writeStream.streamContent += buf;
	};

	writeStream.end = function (buf) {
		console.log('writeStream.end: ' + buf);
		if (arguments.length) writeStream.write(buf);

		writeStream.writable = false;
		callback(writeStream.streamContent);
	};

	writeStream.destroy = function () {
		console.log('writeStream.destroy');
		writeStream.writable = false;
	};

	return writeStream;
}

module.exports.readlineAlternateBuffers = function() {
	var readStream = createReadStream();
	var writeStream = createWriteStream(function(data) {
		console.log('Output: ' + data);
	});

	(function() {
		var rl = readline.createInterface({
			input: readStream,
			// output: process.stdout
			output: writeStream
		});

		rl.question('Here\'s the question: ', function(answer) {
			console.log('Answer says: \'' + answer + '\'.');
			rl.close();
		});

		// Feed it.
		readStream.emit('data', 'My first answer\n');
		readStream.emit('end');
	})();
};

