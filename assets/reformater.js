const fs = require('fs');
const path = require('path');

function merge_arrays(images, instructions) {
    const n = images.length;
    const m = instructions.length;
    var new_array;
    if (n > m) {
        new_array = images.slice();
        for (var i in instructions) {
            new_array[i].instr = instructions[i];
        }
        for (var j = m; j < n; j++) {
            new_array[j].instr = null;
        }
    }
    else {
        new_array = images.slice();
        for (var i in images) {
            new_array[i].instr = instructions[i];
        }
        for (var j = n; j < m; j++) {
            new_array[j] = {src: null, desc: null, instr: instructions[j]};
        }
    }
    return new_array;
}

function rewrite_file(filename) {
	const fullname = './directions/' + filename
	const data = require(fullname);
    data.info = merge_arrays(data.images, data.instructions);
    delete data.images;
    delete data.instructions;
    fs.writeFileSync(fullname, data);
}

const isFile = fileName => {
	return fs.lstatSync(fileName).isFile();
}
var folderPath = './directions';

var directions = fs.readdirSync(folderPath).map(fileName => {
	if (typeof folderPath == 'string' && typeof fileName == 'string') {
		return path.join(folderPath, fileName);
	}
}).filter(isFile)

for (var i in directions) {
	var place = directions[i];
    rewrite_file(path.basename(place));
}
