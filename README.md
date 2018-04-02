# Greetr.js

A javascript library which supports jquery and can greet in four major languages formally and informally. Its simple api can be used to add any language with just some basic steps.

## Getting Started

* clone the repository
 


### Prerequisites

What things you need to install the software and how to install them

* Javascript


## Built With

* Javasciprt

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.


## Authors

* **Divyansh Dwivedi** - *Initial work*

See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Example

*example:- 
```javascript
var g = G$("John","","es");
g.greet(true).setLang('en').greet()

$("#login").click(function() {
	var loginGrtr = G$('','','')
	$("#logindiv").hide();
	loginGrtr.setLang($('#lang').val()).HTMLgreeting("#greeting", true).log();
});
```
