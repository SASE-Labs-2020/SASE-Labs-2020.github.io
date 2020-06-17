# SASE Labs 2020

This is the repo for this year's project. It also serves the image and data assets for the Gopher Way app. API is merely uploaded JSON files because GitHub static file hosting is free.

Visit the website [here](https://SASE-Labs-2020.github.io).

## Format

### Example

```
{
	"origin": "Coffman Memorial Union",
	"destination": "Mark G. Yudof Hall",
	"coordinates": [
		{
			"latitude": 44.972,
			"longitude": -93.235794
		},
		{
			"latitude": 44.972,
			"longitude": -93.235062
		},
		{
			"latitude": 44.97233,
			"longitude": -93.235062
		},
		{
			"latitude": 44.97233,
			"longitude": -93.23536
		},
		{
			"latitude": 44.972658,
			"longitude": -93.235349
		}
	],
	"info": [
		{
			"src": {
				"uri": "https://sase-labs-2020.github.io/assets/images/coffman_yudof_1.png"
			},
			"desc": "This door in the Coffman Memorial Union basement leads to the East River Road Garage.",
			"instr": "Go to the basement floor of Coffman Memorial Union. There are elevators, stairs, and escalators."
		},
		{
			"src": {
				"uri": "https://sase-labs-2020.github.io/assets/images/coffman_yudof_2.png"
			},
			"desc": "The East River Road Garage has stairs and elevators across these rows of parking. Notice the sign indicating the direction of the elevators.",
			"instr": "Follow the signs for the East River Road Garage by going south. At the base of the second set of escalators is a door to the garage."
		},
		{
			"src": {
				"uri": "https://sase-labs-2020.github.io/assets/images/coffman_yudof_3.png"
			},
			"desc": "The East River Road Garage elevators and stairs exit at this point.",
			"instr": "Enter and take the stairs or elevator to the garage."
		},
		{
			"src": null,
			"desc": null,
			"instr": "The garage has a barrier looping left around the rows of parking. Walk around the barrier to the elevator lobby or take the stairs."
		},
		{
			"src": null,
			"desc": null,
			"instr": "Exit one level up on the first floor. The elevator lobby is inside Yudof Hall, but does not have access to its residential area. Exit the lobby and the residential area of Yudof Hall will be around the left corner."
		}
	]
}
```

* origin: string
* destination: string
* coordinates: array of objects with keys
  * latitude: float
  * longitude: float
* info: array of objects with
  * src: object with key uri (url of image asset) or null
  * desc: string (description/caption of image asset) or null
  * instr: string (instructions/directions corresponding to that image) or null

You can find the latitude and longitude coordinates by right-clicking on Google Maps and selecting "What's here?".

Make sure your [JSON is valid](https://jsonlint.com/?code=).
