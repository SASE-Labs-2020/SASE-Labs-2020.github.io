//Graph Builder
/*Format:
 
  {
  node: {
    neighbor: cost Number
  }
}

*/
const Graph = require('node-dijkstra');
const geolib = require('geolib');
const fs = require('fs');
const path = require('path');

var route = new Object();

function add_node(filename)
{ //Adds two nodes, origin and destination, with the distance (ft) between them
    const data = require('./directions/' + filename);
    var origin = data.origin, destination = data.destination, coordinates = data.coordinates;

    if (!route.hasOwnProperty(origin))
    {
        route[origin] = new Object();
    }
    if (!route.hasOwnProperty(destination))
    {
        route[destination] = new Object();
    }

    var distance = 0;
    for (let i = 0; i < coordinates.length-1; i++)
    {
        distance += geolib.getDistance(coordinates[i], coordinates[i+1]);
    }
    route[origin][destination] = distance;
    route[destination][origin] = distance;
}

//tests
/*
var name = readline('Add file: ');
while (name != 'exit') {
    add_node(name);
    name = preadline('Add file: ');
}

console.log(route);*/

const isFile = fileName => {
    return fs.lstatSync(fileName).isFile()
}
var folderPath = './directions';
var directions = [];
fs.readdirSync(folderPath).map(fileName => {
    directions.append(path.join(folderPath, fileName))
})
    .filter(isFile)


console.log(directions);
//write file...










