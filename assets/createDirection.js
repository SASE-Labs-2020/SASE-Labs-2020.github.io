const fs = require('fs');
const path = require('path');
const yargs = require('yargs');

const argv = yargs
	.options({
		'coordinates': {
			alias: 'c',
			describe: 'array of latitude and longitude values',
			demandOption: true
		},
		'info': {
			alias: 'i',
			describe: 'array of one or more of {image url, image caption, direction instruction}',
			demandOption: true
		}
	})
	.example([
		["node $0 here_there.json -c '[[57.166668, -3.229961], [47.599392, 3.533462]]' -i '[{\"instr\":\"Go there\"}]'", 'Create here_there.json without images'],
		["node $0 here_there.json -c '[[57.166668, -3.229961], [47.599392, 3.533462]]' -i '[{\"src\":\"https://sase-labs-2020.github.io/assets/images/here_there_1.png\",\"desc\":\"The entrance\",\"instr\":\"Go there\"}]'", 'Create here_there.json with an image']
	])
	.help()
	.alias('help', 'h')
	.argv;

var json = new Object();
var coordinates = JSON.parse(argv.coordinates).map(arr => ({ latitude: arr[0], longitude: arr[1] }));
var info = JSON.parse(argv.info).map(obj => {
	if (!('src' in obj)) {
		obj.src = null;
	}
	else {
		obj.src = {uri:obj.src};
	}
	if (!('desc' in obj)) obj.desc = null
	return obj;
});
const names = Object.fromEntries(Object.entries(require('./names.json')).map(([k, v]) => ([v, k])));
const endpoints = argv._[0].replace('.json', '').split('_');
json.origin = endpoints[0];
json.destination = endpoints[1];
json.coordinates = coordinates;
json.info = info;

fs.writeFile('./directions/' + argv._[0], JSON.stringify(json, null, '\t'), (err) => {
	if (err) {
		console.error(err);
		return;
	}
	console.log(argv._[0] + " created");
});
