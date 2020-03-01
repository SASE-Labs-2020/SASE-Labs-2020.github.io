//graph maker

/*{
  node: {
    neighbor: cost Number
  }
}*/

const geolib = require('geolib');
import getDistance from 'geolib/es/getDistance';
const fs = require('fs');

var route = new Object();

function add_node(filename = 'directions/kolthoff_smith.json')
{ //Adds two nodes, origin and destination, with the distance (ft) between them
    const data = require(filename);
    var origin = data.origin, destination = data.destination, coord = data.coordinates;

    if (route.hasOwnProperty(origin))
    {
        route[origin] = 
    }

}

//tests







