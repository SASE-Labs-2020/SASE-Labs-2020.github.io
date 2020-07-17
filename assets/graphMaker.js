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
{ 
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



const isFile = fileName => {
    return fs.lstatSync(fileName).isFile()
}
var folderPath = './directions';

var directions = fs.readdirSync(folderPath).map(fileName => {
    if (typeof folderPath == 'string' && typeof fileName == 'string') {
        return path.join(folderPath, fileName);
    }
})
    .filter(isFile);


for (var i in directions) {
    var place = directions[i];
    add_node(path.basename(place));
}

console.log(route);

fs.writeFile("./graph.json", JSON.stringify(route, null, '\t'), (err) => {
    if (err) {
        console.error(err);
        return;
    };
    console.log("graph.json created");
});
