(function () {
	var names =["Yaakov", "John", "Jen","Jason","Paul","Frank","Larry","Paula","Laura","Jim"]
	for (var name=0; name < names.lenght; name++){
		var firstLetter = names [name].charAt(0).toLowerCase();
		if (firstLetter === 'j'){
			byespeaker.speak(names[name]);
		} else {
			helloSpeaker.speak(names[name]);
		}
	}
})();