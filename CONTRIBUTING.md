# Contributing

Before contributing to this repository, please discuss the change you wish to make via issue or email. If you are sending an email, please mention your GitHub username so you can be added as an outside collaborator.

## Guidelines

* [This map](https://www.pts.umn.edu/sites/pts.umn.edu/files/bikego.pdf) is a helpful reference
* Please use other paths as reference to ensure straight edges and aligned coordinates.

## Contact

| Maintainer | Email |
|------------|-------|
| Nathaniel  | budij001@umn.edu |
| Abi        | chiao010@umn.edu |

## Feedback/Contribution Form

To contribute without using GitHub, please submit [this form](https://forms.gle/PUGtoRsrAP3jrcj67) with your feedback on the app and/or additional information on the Gopher Way to add to the app.

## Pull Requests

* Pull Requests require sign-off from a Code Owner
* It may be helpful to read the [README](https://SASE-Labs-2020.github.io/README.md) for JSON schema. Please update the README if your changes impact the schema.
* Please use the `assets/createDirection.js` script to add JSON files.

## Script Documentation

Run `node createDirections.js -h` to show CLI arguments and example usage:

```
Options:
  --version          Show version number                               [boolean]
  --coordinates, -c  array of latitude and longitude values           [required]
  --info, -i         array of one or more of {image url, image caption,
                     direction instruction}                           [required]
  --help, -h         Show help                                         [boolean]

Examples:
  node createDirection.js here_there.json   Create here_there.json without
  -c "[[57.166668, -3.229961], [47.599392,  images
  3.533462]]" -i "[{'instr':'Go there'}]"
  node createDirection.js here_there.json   Create here_there.json with an image
  -c "[[57.166668, -3.229961], [47.599392,
  3.533462]]" -i "[{'src':'https://sase-la
  bs-2020.github.io/assets/images/here_the
  re_1.png','desc':'The
  entrance','instr':'Go there'}]"
```

# Credits

## Research Team
* Eunsong Ko
* Yanai Sun
* Yangtso Tenzin
* Melody Tran
* Kyra Welch
* Rachel Zhao
## Development Team
* Heng Leam
* Elaine Lee
* Andy Wong
* Michael Yang
## Leadership
* Gaurav Basnet
* Nathaniel Budijono
* Abi Chiaokhiao
* Jerry Jiang
* Derek Zhu
