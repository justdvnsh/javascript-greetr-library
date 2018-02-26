(function (global, $){

	let Greetr = function(firstname, lastname, language){
		return new Greetr.init(firstname, lastname, language) // function just return a new object made by the object constructor
	}

	let supportedLangs = {
		en: 'en',
		es: 'es',
		hin: 'hin',
		fr: 'fr'
	}

	let greeting = {
		en: "Hello",
		es: "Hola",
		hin: "kaise ho bhai..",
		fr: "et tu brute"
	};

	let formalGreeting = {
		en: "Greetings",
		es: "Saludos",
		hin: "namaskar",
		fr: "hilo dilo"
	}

	let logMessages = {
		en: "Logged in",
		es: "Incognio secion",
		hin: "session shuru ho gaya hai",
		fr: "secion et tu brute"
	}


	Greetr.prototype = {

		fullName: function() {
			return this.firstname + " " + this.lastname; // the this variable would point to the calling object cerated by the Greetr.init
		}, 

		validate : function() {
			if (supportedLangs[this.language] === undefined) {
				throw new Error("Invalid language. This time , this library only supports English and Spanish.!")
			}
			return this
		},

		greetings: function() {
			return greeting[this.language] + ' ' + this.firstname
		},

		formalGreetings: function() {
			return formalGreeting[this.language] + ' ' + this.fullName();
		},

		greet: function(formal) {
			let msg;
			//we will use coersion means that when using this method , we would just have to pass true if we want a formal greeting,
			// or leave it blank if we want an informal one. the true value would be passed as the argument and set formal = true
			if (formal){
				msg = this.formalGreetings()
			} else {
				msg = this.greetings()
			}
			console.log(msg)
			return this // this is to make it a chainable method, i.e. we could call as many methods as we want in a single line, when using this 
			// method. eg. let g = G$("john","doe"), which willl create the object and set it to the var g.
			// then we do do something like, g.greet(true).setlang('es')
		},

		setLang: function(language) {
			this.validate()
			this.language = language
			return this
		},

		log: function() {
			if(console){
				console.log(logMessages[this.language] + ": " + this.fullName())
			}
			return this
		},

		// adding jquery support
		HTMLgreeting: function(selector, formal){
			if (!$){
				// check if jquery is loaded or not in the script
				throw new Error("jQuery isn't loaded..!")  // since jQuery was passed along with the global window object
			}
			if (!selector){
				throw new Error("selector is missing")
			}
			let msg;
			if (formal){
				msg = this.greetings() // because this actually returns the value
				// but this.greet() would actuallly console.log() the value and return this.
			} else {
				msg = this.formalGreetings()
			}
			$(selector).html(msg); // this actually makes the use of jQuery
			return this;
		}


	} //this just makes the prototype for the Greetr.init object.

	// since every function has a prototype, this function also has a prototype which actually is an empty object.
	//Geetr.init actually just appends a property/ method to the function protortype.

	Greetr.init = function(firstname, lastname, language){
		this.firstname = firstname || "Divyansh",
		this.lastname = lastname || "Dwivedi",
		this.language = language || "en" //if there is firstname/lastname/language , use if not, use the default.
	}
	
	Greetr.init.prototype = Greetr.prototype // it is just saying that the prototype of the greetr.init function constructor points to the 
	// Greetr.prototype 
	//this is done so that all the objects created by the Greetr.init , have the access to the properties and methods of the Greetr function 
	// prototype

	// now for the interface, we want the users to use our module by just calling Greetr() or G$();
	// to do thatwe would have to attach $ sign to the global object.
	global.Greetr = global.G$ = Greetr //now both the type of calls for global object, are calling for Greetr function.
})(window, jQuery);