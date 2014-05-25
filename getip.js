// return list of 'active' interfaces

var exec = require('child_process').execFile,
	child;

child = exec("ifconfig", function (error, stdout, stderr) {

	var lines = stdout.toString().split('\n'),
		found = {},
		interface = '';

	lines.forEach( function (line) {

		if( line[0] != '\t' && line[0] != undefined  && line[0] != null ) {

			// found a line that begins with an interface name
			interface = line.substring(0, line.indexOf(':'));

		} else {

			// find the IP of the found interface
			var str = /inet /;

			if ( line.match(str) ) {
				found[interface] = line.split(' ')[1];
			}

		}

	});

	console.dir(found);

});
